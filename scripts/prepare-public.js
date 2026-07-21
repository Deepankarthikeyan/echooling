const fs = require("fs");
const path = require("path");
const { knownRoutes } = require("../lib/star-routes");

const SITE_URL = "https://www.starpoliceacademy.in";

const rootDir = path.join(__dirname, "..");
const publicDir = path.join(rootDir, "public");

function copyEntry(sourceName, targetName = sourceName) {
  const sourcePath = path.join(rootDir, sourceName);
  const targetPath = path.join(publicDir, targetName);

  if (!fs.existsSync(sourcePath)) {
    return;
  }

  fs.cpSync(sourcePath, targetPath, { recursive: true });
}

function writeSitemap() {
  const rootSitemapPath = path.join(rootDir, "sitemap.xml");

  if (fs.existsSync(rootSitemapPath)) {
    fs.copyFileSync(rootSitemapPath, path.join(publicDir, "sitemap.xml"));
    return;
  }

  const urls = knownRoutes
    .map((route) => `  <url><loc>${SITE_URL}${route === "/" ? "" : route}</loc></url>`)
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
}

function writeRobots() {
  const robots = `User-agent: *\nAllow: /\n\nSitemap: https://starpoliceacademy.in/sitemap.xml\n`;
  fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");
}

function copySchedulePdf() {
  const sourcePath = path.join(rootDir, "documents", "SPA Test Schedule.pdf");
  const targetPath = path.join(publicDir, "SPA Test Schedule.pdf");

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
  }
}

if (fs.existsSync(publicDir)) {
  fs.rmSync(publicDir, { recursive: true, force: true });
}

fs.mkdirSync(publicDir, { recursive: true });
copyEntry("assets");
copySchedulePdf();
copyEntry("style.css");
copyEntry("variables.css");
writeSitemap();
writeRobots();

console.log("Prepared public/ for Vercel static file serving.");
