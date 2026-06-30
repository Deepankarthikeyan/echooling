const fs = require("fs");
const path = require("path");

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

if (fs.existsSync(publicDir)) {
  fs.rmSync(publicDir, { recursive: true, force: true });
}

fs.mkdirSync(publicDir, { recursive: true });
copyEntry("assets");
copyEntry("style.css");
copyEntry("variables.css");

console.log("Prepared public/ for Vercel static file serving.");
