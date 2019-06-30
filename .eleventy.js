module.exports = function(eleventyConfig) {
    // Copy images, CSS & fonts directories
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("fonts");

    eleventyConfig.addShortcode("header", function(marker, title, description){
      return `
        <hr />
        <div class="max-width-3 mx-auto px1 mt3 clearfix hidden">
        <span>${marker}</span>
        <h1 class="case-study">${title}</h1>
        <p class="subhead">${description}</p>
        </div>
      `
    });

    eleventyConfig.addShortcode("contentBlock", function(title, leftCol, leftContent='', rightContent=''){
      return `
        <div class="max-width-3 mx-auto px1 clearfix hidden">
          <h2>${title}</h2>
          <div class="md-col md-col-${leftCol} pr2">
            ${leftContent}
          </div>
          <div class="md-col md-col-${12 - leftCol} pl2">
            ${rightContent}
          </div>
        </div>
      `
    });
  };