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
  const urls = knownRoutes
    .map((route) => `  <url><loc>${SITE_URL}${route === "/" ? "" : route}</loc></url>`)
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
}

function writeRobots() {
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");
}

if (fs.existsSync(publicDir)) {
  fs.rmSync(publicDir, { recursive: true, force: true });
}

fs.mkdirSync(publicDir, { recursive: true });
copyEntry("assets");
copyEntry("style.css");
copyEntry("variables.css");
writeSitemap();
writeRobots();

console.log("Prepared public/ for Vercel static file serving.");
