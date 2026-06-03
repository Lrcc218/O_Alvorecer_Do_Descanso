const fs = require("fs");
const path = require("path");

const files = fs.readdirSync("src/components").filter((f) => f.endsWith(".tsx"));
files.forEach((file) => {
  const filepath = path.join("src/components", file);
  let content = fs.readFileSync(filepath, "utf8");
  let modified = false;

  if (content.includes("<section")) {
    content = content.replace(/<section([^>]*)className="([^"]*)"/g, (match, before, classes) => {
      let newClasses = classes
        .replace(/px-\d+/g, "")
        .replace(/md:px-\d+/g, "")
        .replace(/lg:px-\d+/g, "")
        .replace(/xl:px-\d+/g, "")
        .replace(/2xl:px-\d+/g, "")
        .replace(/sm:px-\d+/g, "")
        .replace(/py-\d+/g, "")
        .replace(/sm:py-\d+/g, "")
        .replace(/md:py-\d+/g, "")
        .replace(/lg:py-\d+/g, "")
        .replace(/xl:py-\d+/g, "")
        .replace(/\s+/g, " ")
        .trim();
      newClasses = "px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-24 py-24 sm:py-32 lg:py-40 " + newClasses;
      modified = true;
      return "<section" + before + 'className="' + newClasses + '"';
    });
  }

  if (content.includes("max-w-")) {
    // Replace inner container max widths correctly as per user request
    content = content.replace(/max-w-7xl/g, "max-w-4xl lg:max-w-none 2xl:max-w-screen-2xl");
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filepath, content);
    console.log("Updated " + file);
  }
});
