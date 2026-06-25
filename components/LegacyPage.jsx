import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import parse from "html-react-parser";

const attrNameMap = {
  "accept-charset": "acceptCharset",
  charset: "charSet",
  class: "className",
  "http-equiv": "httpEquiv",
};

function normalizeHeadProps(attrs = {}) {
  return Object.entries(attrs).reduce((props, [name, value]) => {
    props[attrNameMap[name] || name] = value;
    return props;
  }, {});
}

function LegacyHead({ headTags, title }) {
  return (
    <Head>
      <title>{title}</title>
      {headTags.map((headTag, index) => {
        const props = normalizeHeadProps(headTag.attrs);
        const key = `${headTag.tag}-${props.href || props.name || props.rel || index}`;
        return headTag.tag === "meta" ? (
          <meta key={key} {...props} />
        ) : (
          <link key={key} {...props} />
        );
      })}
    </Head>
  );
}

function normalizeClientRoute(pathname, knownRouteSet) {
  const cleanPath = pathname.replace(/\/+$/, "") || "/";

  if (knownRouteSet.has(cleanPath)) {
    return cleanPath;
  }

  if (cleanPath === "/index" || cleanPath === "/index.html") {
    return "/";
  }

  if (cleanPath.endsWith("/index.html")) {
    const withoutIndex = cleanPath.slice(0, -"/index.html".length) || "/";
    return knownRouteSet.has(withoutIndex) ? withoutIndex : cleanPath;
  }

  if (cleanPath.endsWith(".html")) {
    const withoutExtension = cleanPath.slice(0, -".html".length) || "/";
    return knownRouteSet.has(withoutExtension) ? withoutExtension : cleanPath;
  }

  return cleanPath;
}

function LegacyNavigation({ knownRouteAliases }) {
  const router = useRouter();
  const knownRouteSet = useMemo(() => new Set(knownRouteAliases), [knownRouteAliases]);

  useEffect(() => {
    function onDocumentClick(event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = event.target.closest?.("a[href]");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      const target = new URL(anchor.href, window.location.href);
      if (target.origin !== window.location.origin) {
        return;
      }

      const normalizedRoute = normalizeClientRoute(target.pathname, knownRouteSet);
      if (!knownRouteSet.has(normalizedRoute)) {
        return;
      }

      event.preventDefault();
      router.push(`${normalizedRoute}${target.search}${target.hash}`);
    }

    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, [knownRouteSet, router]);

  return null;
}

function LegacyRuntime({ bodyClassName, dir, lang, scripts }) {
  useEffect(() => {
    document.body.className = bodyClassName || "";
    document.documentElement.dir = dir || "ltr";
    document.documentElement.lang = lang || "en";
  }, [bodyClassName, dir, lang]);

  useEffect(() => {
    let cancelled = false;

    async function loadScripts() {
      document.querySelectorAll("script[data-legacy-script]").forEach((script) => script.remove());

      for (const scriptDefinition of scripts) {
        if (cancelled) {
          return;
        }

        await new Promise((resolve) => {
          const script = document.createElement("script");
          script.dataset.legacyScript = "true";

          if (scriptDefinition.src) {
            script.src = scriptDefinition.src;
            script.async = false;
            script.onload = resolve;
            script.onerror = resolve;
          } else {
            script.text = scriptDefinition.code || "";
            resolve();
          }

          document.body.appendChild(script);
        });
      }

      window.setTimeout(() => {
        const preloader = document.getElementById("react__preloader");
        if (preloader) {
          preloader.style.display = "none";
        }
      }, 850);
    }

    loadScripts();

    return () => {
      cancelled = true;
    };
  }, [scripts]);

  return null;
}

export default function LegacyPage({ page, knownRouteAliases }) {
  const bodyContent = useMemo(() => parse(page.bodyHtml), [page.bodyHtml]);

  return (
    <>
      <LegacyHead headTags={page.headTags} title={page.title} />
      <LegacyNavigation knownRouteAliases={knownRouteAliases} />
      <LegacyRuntime
        bodyClassName={page.bodyClassName}
        dir={page.dir}
        lang={page.lang}
        scripts={page.scripts}
      />
      {bodyContent}
    </>
  );
}
