module.exports = function(eleventyConfig) {
    // Copy images, CSS & fonts directories
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");

    eleventyConfig.addShortcode("header", function(marker, title, description){
      return `<div class="max-width-3 mx-auto px1 mt3 clearfix">
        <span>${marker}</span>
        <h1 class="case-study">${title}</h1>
        <p class="subhead">${description}</p>
        </div>`
    })
  };