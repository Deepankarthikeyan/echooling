const rootPages = [
  "index",
  "index-two",
  "index-three",
  "index-four",
  "index-five",
  "index-six",
  "index-seven",
  "about",
  "instructors",
  "profile",
  "events",
  "events-right-sidebar",
  "events-single",
  "login",
  "signup",
  "coureses-grid",
  "coureses-right-sidebar",
  "coureses-list",
  "coureses-single",
  "blog",
  "blog-details",
  "contact",
];

const rtlPages = [...rootPages];

function pageFileName(page) {
  return page === "index" ? "index.html" : `${page}.html`;
}

function pageRoute(page, prefix = "") {
  if (page === "index") {
    return prefix || "/";
  }

  return `${prefix}/${page}`;
}

function createPageDefinition({ route, file, scope, assetBase, styleBase }) {
  return {
    route,
    file,
    scope,
    assetBase,
    styleBase,
  };
}

const legacyPages = [
  ...rootPages.map((page) =>
    createPageDefinition({
      route: pageRoute(page),
      file: pageFileName(page),
      scope: "root",
      assetBase: "",
      styleBase: "",
    })
  ),
  ...rtlPages.map((page) =>
    createPageDefinition({
      route: pageRoute(page, "/echooling-rtl"),
      file: `echooling-rtl/${pageFileName(page)}`,
      scope: "rtl",
      assetBase: "/echooling-rtl",
      styleBase: "/echooling-rtl",
    })
  ),
  createPageDefinition({
    route: "/echooling-rtl/landing",
    file: "echooling-rtl/landing/index.html",
    scope: "landing",
    assetBase: "/echooling-rtl/landing",
    styleBase: "/echooling-rtl/landing",
  }),
  createPageDefinition({
    route: "/echooling-rtl/landing/landing",
    file: "echooling-rtl/landing/landing/index.html",
    scope: "landing-nested",
    assetBase: "/echooling-rtl/landing/landing",
    styleBase: "/echooling-rtl/landing/landing",
  }),
];

const routeLookup = new Map();

for (const page of legacyPages) {
  routeLookup.set(page.route, page);

  if (page.route === "/") {
    routeLookup.set("/index.html", page);
  } else {
    routeLookup.set(`${page.route}.html`, page);
    routeLookup.set(`${page.route}/index.html`, page);
  }
}

function normalizeRoute(route = "/") {
  if (!route || route === "/index" || route === "/index.html") {
    return "/";
  }

  let cleanRoute = route.split("?")[0].split("#")[0];
  cleanRoute = cleanRoute.replace(/\/+$/, "") || "/";

  const page = routeLookup.get(cleanRoute);
  return page ? page.route : cleanRoute;
}

const knownRoutes = Array.from(new Set(legacyPages.map((page) => page.route)));
const knownRouteAliases = Array.from(routeLookup.keys());

module.exports = {
  knownRouteAliases,
  knownRoutes,
  legacyPages,
  normalizeRoute,
  routeLookup,
};
