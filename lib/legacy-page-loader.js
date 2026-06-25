const fs = require("fs");
const path = require("path");
const { getGeneratedRootPage } = require("./generated-root-pages");
const { normalizeRoute, routeLookup } = require("./legacy-routes");

const projectRoot = process.cwd();
const currentYearScriptPattern =
  /<script>\s*document\.write\(\s*new Date\(\)\.getFullYear\(\)\s*\)\s*<\/script>/gi;
const scriptTagPattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
const externalScriptPattern = /\ssrc=(["'])(.*?)\1/i;
const bodyTagPattern = /<body\b([^>]*)>/i;
const headTagPattern = /<head\b[^>]*>([\s\S]*?)<\/head>/i;
const htmlTagPattern = /<html\b([^>]*)>/i;
const titleTagPattern = /<title>([\s\S]*?)<\/title>/i;
const headAssetTagPattern = /<(meta|link)\b([^>]*)>/gi;
const attrPattern = /([:@\w-]+)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;

function parseAttributes(attributeSource = "") {
  const attrs = {};
  let match;

  while ((match = attrPattern.exec(attributeSource))) {
    const name = match[1];
    const value = match[3] ?? match[4] ?? match[5] ?? true;
    attrs[name] = value;
  }

  return attrs;
}

function getHtmlAttribute(source, name) {
  const attrs = parseAttributes(source || "");
  return attrs[name] || "";
}

function normalizeAssetUrl(url, pageDefinition) {
  if (!url || shouldSkipUrl(url)) {
    return url;
  }

  if (url.startsWith("./")) {
    return `${pageDefinition.assetBase}/${url.slice(2)}`.replace(/\/{2,}/g, "/");
  }

  if (url.startsWith("assets/")) {
    return `${pageDefinition.assetBase}/${url}`.replace(/\/{2,}/g, "/");
  }

  if (url === "style.css" || url === "./style.css") {
    return `${pageDefinition.styleBase}/style.css`.replace(/\/{2,}/g, "/") || "/style.css";
  }

  return url;
}

function shouldSkipUrl(url) {
  return (
    url.startsWith("#") ||
    url.startsWith("/") ||
    /^[a-z][a-z0-9+.-]*:/i.test(url) ||
    url.startsWith("{{")
  );
}

function resolveInternalRoute(url, pageDefinition) {
  if (!url || shouldSkipUrl(url)) {
    return url;
  }

  const htmlMatch = url.match(/^(.+?\.html)([?#].*)?$/i);
  if (!htmlMatch) {
    return url;
  }

  const htmlPath = htmlMatch[1].replace(/^\.\//, "");
  const suffix = htmlMatch[2] || "";
  const pageName = path.basename(htmlPath, ".html");
  let candidateRoute;

  if (pageDefinition.scope === "root") {
    candidateRoute = pageName === "index" ? "/" : `/${pageName}`;
  } else if (pageDefinition.scope === "rtl") {
    candidateRoute = pageName === "index" ? "/echooling-rtl" : `/echooling-rtl/${pageName}`;
  } else {
    candidateRoute =
      pageName === "index"
        ? pageDefinition.route
        : `${pageDefinition.route.replace(/\/$/, "")}/${pageName}`;
  }

  const normalizedRoute = normalizeRoute(candidateRoute);
  return routeLookup.has(normalizedRoute) ? `${normalizedRoute}${suffix}` : url;
}

function transformAttributeUrls(html, pageDefinition) {
  return html.replace(/\b(href|src|action)=(["'])(.*?)\2/gi, (match, attr, quote, rawUrl) => {
    if (attr.toLowerCase() === "action") {
      return match;
    }

    const routedUrl = resolveInternalRoute(rawUrl, pageDefinition);
    const assetUrl = normalizeAssetUrl(routedUrl, pageDefinition);
    return `${attr}=${quote}${assetUrl}${quote}`;
  });
}

function extractHeadTags(headHtml, pageDefinition) {
  const tags = [];
  let match;

  while ((match = headAssetTagPattern.exec(headHtml))) {
    const tag = match[1].toLowerCase();
    const attrs = parseAttributes(transformAttributeUrls(match[2], pageDefinition));

    if (tag === "meta" && (attrs.charset || attrs.charSet)) {
      continue;
    }

    tags.push({ tag, attrs });
  }

  return tags;
}

function extractScripts(bodyHtml, pageDefinition) {
  const scripts = [];
  const html = bodyHtml.replace(scriptTagPattern, (fullTag, attributes, inlineCode) => {
    const externalScript = attributes.match(externalScriptPattern);

    if (externalScript) {
      scripts.push({
        src: normalizeAssetUrl(externalScript[2], pageDefinition),
      });
      return "";
    }

    const trimmedCode = inlineCode.trim();
    if (trimmedCode) {
      scripts.push({ code: trimmedCode });
    }

    return "";
  });

  return { html, scripts };
}

function resolvePageByRoute(route) {
  const normalizedRoute = normalizeRoute(route);
  return routeLookup.get(normalizedRoute) || null;
}

function loadLegacyPage(route) {
  const pageDefinition = resolvePageByRoute(route);

  if (!pageDefinition) {
    return null;
  }

  if (pageDefinition.scope === "root") {
    return getGeneratedRootPage(pageDefinition.route);
  }

  const filePath = path.join(projectRoot, pageDefinition.file);
  const source = fs.readFileSync(filePath, "utf8");
  const htmlTag = source.match(htmlTagPattern);
  const headTag = source.match(headTagPattern);
  const bodyTag = source.match(bodyTagPattern);
  const titleTag = source.match(titleTagPattern);
  const headHtml = headTag ? headTag[1] : "";
  const bodyAttributes = bodyTag ? bodyTag[1] : "";
  const bodyStart = bodyTag ? source.indexOf(bodyTag[0]) + bodyTag[0].length : 0;
  const bodyEnd = source.lastIndexOf("</body>");
  const rawBody = source.slice(bodyStart, bodyEnd > bodyStart ? bodyEnd : undefined);
  const bodyWithYear = rawBody.replace(currentYearScriptPattern, String(new Date().getFullYear()));
  const transformedBody = transformAttributeUrls(bodyWithYear, pageDefinition);
  const { html, scripts } = extractScripts(transformedBody, pageDefinition);

  return {
    bodyClassName: getHtmlAttribute(bodyAttributes, "class"),
    bodyHtml: html,
    dir: getHtmlAttribute(htmlTag ? htmlTag[1] : "", "dir") || "ltr",
    headTags: extractHeadTags(headHtml, pageDefinition),
    lang: getHtmlAttribute(htmlTag ? htmlTag[1] : "", "lang") || "en",
    route: pageDefinition.route,
    scripts,
    title: titleTag ? titleTag[1].trim() : "Echooling",
  };
}

module.exports = {
  loadLegacyPage,
};
