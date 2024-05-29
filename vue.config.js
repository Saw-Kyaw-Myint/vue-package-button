const { defineConfig } = require("@vue/cli-service");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin("delete-html").use({
      apply: (compiler) => {
        compiler.hooks.done.tap("DeleteHtmlPlugin", (stats) => {
          const outputPath = stats.compilation.outputOptions.path;

          // Function to delete all HTML files
          const deleteHtmlFiles = (dir) => {
            fs.readdir(dir, (err, files) => {
              if (err) {
                console.error("Error reading output directory:", err);
                return;
              }

              // Loop through the files and delete HTML files
              files.forEach((file) => {
                if (file.endsWith(".html")) {
                  const filePath = path.resolve(dir, file);
                  fs.unlink(filePath, (err) => {
                    if (err) {
                      console.error(`Error deleting file ${file}:`, err);
                    } else {
                      console.log(`Deleted file: ${file}`);
                    }
                  });
                }
              });
            });
          };

          // Delete HTML files in the output directory
          deleteHtmlFiles(outputPath);
        });
      },
    });
  },
});
