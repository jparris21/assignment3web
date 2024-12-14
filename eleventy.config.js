const fs = require('fs'); // Required to read the 404.html file
const markdownIt = require('markdown-it'); // Markdown parser to convert markdown to HTML
const md = new markdownIt({ html: true });

module.exports = function(eleventyConfig) {

  // Passthrough copy for CSS and Images
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");

  // Optionally clean the 'dist' directory before each build using eleventy.before
  eleventyConfig.on("eleventy.before", async () => {
    const path = 'dist'; // Output directory
    // Deletes the folder and its contents
    if (fs.existsSync(path)) {
      fs.rmdirSync(path, { recursive: true }); 
    }
  });

  // Handle the 404 page for the development server
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        // Read the 404 page from the dist folder
        const content_404 = fs.readFileSync('dist/404.html');

        browserSync.addMiddleware('*', (req, res) => {
          res.write(content_404); // Serve the 404 page content
          res.end();
        });
      }
    }
  });

  // // Custom filter to process Markdown to HTML
  // eleventyConfig.addFilter('markdown', function(content) {
  //   return md.render(content); // Render Markdown to HTML
  // });

  // Fetch blog data from Strapi and return it as global data
  eleventyConfig.addGlobalData("newblog", async function() {
    try {
      // Fetch the blog data from Strapi (or your API)
      const response = await fetch("http://localhost:1337/api/blogposts");

      // Parse the JSON response
      const result = await response.json();

      // Process Markdown content before returning the data
      const blogPosts = result.data.map(post => {
        // Ensure content exists and process it with markdown-it
        if (post.content) {
          post.content = md.render(post.content);  // Apply markdown filter
        }
        return post;
      });

      return blogPosts;  // Return the processed blog posts array

    } catch (error) {
      console.error("Error fetching blog data:", error);
      // Return an empty array in case of error
      return [];
    }
  });

  // Fetch blog data from Strapi and return it as global data
  eleventyConfig.addGlobalData("blogs", async function() {
    try {
      // Fetch the blog data from Strapi (or your API)
      const response = await fetch("http://localhost:1337/api/blogs");

      // Parse the JSON response
      const result = await response.json();

      // Process Markdown content before returning the data
      const blogPosts = result.data.map(post => {
        // Ensure content exists and process it with markdown-it
        if (post.content) {
          post.content = md.render(post.content);  // Apply markdown filter
        }
        return post;
      });

      return blogPosts;  // Return the processed blog posts array

    } catch (error) {
      console.error("Error fetching blog data:", error);
      // Return an empty array in case of error
      return [];
    }
  });

  // Custom filter to filter posts by ID
  eleventyConfig.addFilter('filterById', function(posts, id) {
    return posts.filter(post => post.id === id);
  });

  // Fetch blog data from Strapi and return it as global data
  eleventyConfig.addGlobalData("api", async function() {
    try {
      // Fetch the blog data from Strapi (or your API)
      const response = await fetch("http://localhost:1337/api/images?populate=image_content");

      // Parse the JSON response
      const result = await response.json();

      // Process Markdown content before returning the data
      const blogPosts = result.data.map(post => {
        // Ensure content exists and process it with markdown-it
        if (post.content) {
          post.content = md.render(post.content);  // Apply markdown filter
        }
        return post;
      });

      return blogPosts;  // Return the processed blog posts array

    } catch (error) {
      console.error("Error fetching blog data:", error);
      // Return an empty array in case of error
      return [];
    }
  });

  return {
    dir: {
      input: "src",  // Source templates and content files
      output: "dist", // Output directory for the generated site
      includes: "_includes" // Directory for partials like header and footer
    },
    passthroughFileCopy: true // Ensure passthrough copy works
  };
};
