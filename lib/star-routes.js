const courseRouteMap = {
  tnusrb: "tnusrb",
  subinspector: "sub-inspector",
  "sub-inspector": "sub-inspector",
  indianarmy: "indian-army",
  "indian-army": "indian-army",
  indiannavy: "indian-navy",
  "indian-navy": "indian-navy",
  indianairforce: "indian-air-force",
  "indian-air-force": "indian-air-force",
  rpf: "rpf",
  "other-course": "capf",
  capf: "capf",
};

const staticRoutes = {
  "/": { type: "home", title: "Home" },
  "/index": { type: "home", title: "Home" },
  "/index.php": { type: "home", title: "Home" },
  "/about": { type: "about", title: "About Star Police Academy" },
  "/about.php": { type: "about", title: "About Star Police Academy" },
  "/courses": { type: "courses", title: "Courses" },
  "/service": { type: "courses", title: "Courses" },
  "/services": { type: "courses", title: "Courses" },
  "/training": { type: "courses", title: "Training" },
  "/register": { type: "register", title: "Students Application" },
  "/register.php": { type: "register", title: "Students Application" },
  "/signup": { type: "register", title: "Students Application" },
  "/login": { type: "register", title: "Students Application" },
  "/contact": { type: "contact", title: "Contact Star Police Academy" },
  "/contact.php": { type: "contact", title: "Contact Star Police Academy" },
  "/faq": { type: "faq", title: "Frequently Asked Questions" },
  "/toppers": { type: "toppers", title: "Toppers and Achievers" },
  "/toppers.php": { type: "toppers", title: "Toppers and Achievers" },
  "/gallery": { type: "toppers", title: "Toppers and Achievers" },
  "/blog": { type: "toppers", title: "Toppers and Achievers" },
  "/blog-details": { type: "toppers", title: "Toppers and Achievers" },
  "/materials": { type: "courses", title: "Training Materials" },
  "/questions": { type: "questions", title: "Questions Paper" },
  "/questions.php": { type: "questions", title: "Questions Paper" },
  "/ansewrkey": { type: "courses", title: "Answer Keys" },
  "/notification": { type: "notification", title: "Recruitment Notification" },
  "/notification.php": { type: "notification", title: "Recruitment Notification" },
  "/youtube": { type: "youtube", title: "Our Recent Videos" },
  "/youtube.php": { type: "youtube", title: "Our Recent Videos" },
  "/test-batch": { type: "notification", title: "Test Batches" },
  "/test-batch.php": { type: "notification", title: "Test Batches" },
  "/instructors": { type: "about", title: "About Star Police Academy" },
  "/profile": { type: "about", title: "About Star Police Academy" },
  "/events": { type: "courses", title: "Courses" },
  "/events-right-sidebar": { type: "courses", title: "Courses" },
  "/events-single": { type: "course", title: "Tamilnadu Police Constable TNUSRB", courseKey: "tnusrb" },
  "/coureses-grid": { type: "courses", title: "Courses" },
  "/coureses-list": { type: "courses", title: "Courses" },
  "/coureses-right-sidebar": { type: "courses", title: "Courses" },
  "/coureses-single": { type: "course", title: "Tamilnadu Police Constable TNUSRB", courseKey: "tnusrb" },
};

for (const [sourceKey, courseKey] of Object.entries(courseRouteMap)) {
  staticRoutes[`/${sourceKey}`] = {
    type: "course",
    title: courseKey,
    courseKey,
  };
  staticRoutes[`/${sourceKey}.php`] = {
    type: "course",
    title: courseKey,
    courseKey,
  };
}

const knownRouteAliases = Array.from(
  new Set(Object.keys(staticRoutes))
);

function cleanRoute(route = "/") {
  const withoutQuery = route.split("?")[0].split("#")[0];
  let clean = withoutQuery.replace(/\/+$/, "") || "/";

  return clean;
}

function resolveStarRoute(route = "/") {
  const clean = cleanRoute(route);
  return staticRoutes[clean] || null;
}

const knownRoutes = Array.from(
  new Set(
    Object.keys(staticRoutes).filter((route) => !route.endsWith(".php") && route !== "/index")
  )
);

module.exports = {
  knownRouteAliases,
  knownRoutes,
  resolveStarRoute,
};
