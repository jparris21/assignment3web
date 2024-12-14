---
layout: layouts/default.hbs
title: "Blog Posts"
---
# Ensure your `README.md` has specific instructions on how to run your application.

This site has the same structure as Lab 1; however, it includes a few more pages, such as an About page, a Terms and Conditions page, and a 404 page. There is now a data file that populates a blog page with pagination, displaying it across multiple pages. When you have the code open in your IDE, open the terminal and run either npm start or npx @11ty/eleventy --serve, then run npm run dev. This should provide you with a link to the website, which will be something like localhost:8080

# Filtering

In my mind, for filtering, I initially tried to make it work by using the IDs from the data file. My goal was to have options on the blog page to filter by those IDs. Once I got it working, I planned to rename the IDs to something like "Lab 1" or "Lab 2". I started by adding a filter to the eleventyConfig, which is still present in my configuration. Then, as I did with the other posts, when I called content, I tried doing something similar with the IDs. Unfortunately, when I tried this, it either didn’t display anything or messed up my original content. I now realize that moving forward, I might need to add specific files to enable filtering. The easiest approach would be to have links that go directly to the pages, but that wouldn't include the CMS. In the end, I attempted to implement the filtering, and although the way I tried to do it may not have been the best approach, at least I gave it a try.