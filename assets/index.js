const postcss = require("postcss");
const tailwind = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const fs = require("fs");

module.exports.processCSS = (inputFile) => {
  return new Promise((resolve, reject) => {
    fs.readFile(inputFile, (err, css) => {
      if (err) return reject(err);

      postcss([tailwind, autoprefixer])
        .process(css, { from: inputFile })
        .then((result) => {
          resolve(result.css);
        });
    });
  });
};
