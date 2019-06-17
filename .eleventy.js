module.exports = function(eleventyConfig) {
    // Copy images, CSS & fonts directories
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");
  };