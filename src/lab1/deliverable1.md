---
layout: layouts/default.hbs
title: Instructions
---

# Deliverable 1
---

# Lab Write-Up

My experience using Static Site Generation (SSG) has been quite interesting, especially since I had never used anything like it before. Initially, I didn’t know what to expect and struggled to understand the concept, wondering why we needed SSG when traditional methods like HTML, CSS, JavaScript, or even PHP had worked well in the past.

However, I soon realized the value of Markdown, which allows you to take content and templates and compile them into HTML effortlessly. This not only saves time but also, in my opinion, makes it easier to format the layout of a site since Markdown is so straightforward to use.

Setting up 11ty was also easy. The instructions clearly guide you on what to input into the terminal, making the process smooth for tasks like creating pages from data, pagination, events, and more. Working with template engines such as Nunjucks was a bonus, as it significantly simplifies handling Markdown.

Although I’ve researched other SSGs like Jekyll and Hugo, I’m most comfortable with 11ty since that’s what I’ve been learning. While it may not be the easiest SSG, the clear instructions helped me create my website using template engines and Markdown, which I found enjoyable. I look forward to continuing to learn more about it in the future.




## **Template Engines Comparison**
---

### **Handlebars**

<details open>
<summary>Pros & Cons</summary>

#### **Pros:**
- **Simplicity:** Syntax is similar to HTML.
- **Flexibility:** Personalized partials and helpers for code that is reused.
- **Compatibility:** Because it builds upon standard HTML, it is simple to integrate with existing code.

#### **Cons:**
- **Logic-less:** No direct support for logic, all must be pre-processed before compiling the template.
- **Complexity in Large Applications:** Can become hard to maintain in large-scale applications.

</details>

---

### **Nunjucks**

<details>
<summary>Pros & Cons</summary>

#### **Pros:**
- **Efficiency**: By offering reusable code snippets and templates, Nunjucks templates can help to expedite the development process.
- **Consistency**: By employing a standardized template structure, they guarantee consistency between various project components or between other projects.
- **Customizability**: It is simpler to adapt templates to various use cases when they can be tailored to meet project requirements.

#### **Cons:**
- **Learning Curve**: For individuals who are not familiar with the software, there can be a learning curve involved in understanding and utilizing Nunjucks templates.
- **Overhead**: If templates are complicated or poorly optimized, using them could result in additional overhead and possibly affect performance.
- **Restricted Flexibility**: Although templates offer a uniform framework, in some situations where unique solutions are required, they may restrict creativity and flexibility.

</details>

---

### **EJS**

<details>
<summary>Pros & Cons</summary>

#### **Pros:**
- **Minimal Syntax:** Since EJS employs simple JavaScript, you are presumably already familiar with its usage.
- **Quick:** Compiles into incredibly productive JavaScript methods.
- **Simple** Embedding: Embedding and combining with HTML is simple.

#### **Cons:**
- **Can get messy:** Mixing JavaScript and HTML can lead to harder-to-read templates.
- **Limited Features:** Lack of some features means you might need additional HTML or JavaScript code to achieve some tasks.

</details>

---

## **Choose One Template Engine for Your Assignment**

For my Assignment 1, I am going to continue using **Nunjucks** because I love the consistency it offers. As I mentioned in the pros of Nunjucks, it ensures consistency across different parts of a project or across multiple projects. While there may be a slight learning curve, practice makes perfect. The customizability, efficiency, and consistency are the main reasons I want to invest more time into my site rather than trying to learn other template engines that may be more complex or have limited features.

---

## **Other Useful Settings Worth Exploring**

### **Template Formats**
You can define which file formats Eleventy processes. By default, Eleventy supports file types like `.md`, `.html`, and `.njk`, but you can customize this using the `templateFormats` option:

```js
module.exports = function (eleventyConfig) {
  return {
    templateFormats: ["html", "liquid", "njk"],
  };
};
```
# Static Site Generators (SSG) Options
---

<details open>
  <summary>1. Jekyll</summary>

  Jekyll is one of the most popular open-source static website generators, powering **GitHub Pages**, which offers free hosting for static sites.

  #### **Pros:**
  - Free and open source
  - Themes can be built as gems and distributed through RubyGems
  - Easy and simple to use
  - Easy migration from popular platforms like WordPress using Jekyll importers

  #### **Cons:**
  - A significant disadvantage is that the build process becomes slower as content expands.
  - The Incremental build is not yet final.
  - As of Jekyll 3, no post pagination was integrated in.
  - Does not support YAML or the use of variables in titles.
  - A lot of plugins age out.

</details>

---

<details>
  <summary>2. Hugo</summary>

  Hugo is an open-source static website generator that markets itself as a “general-purpose” framework, capable of building a wide range of websites beyond just blogs.

  #### **Pros:**
  - Free and open-source 
  - Lightning-fast speed, performance-optimized
  - Pre-installed features: alias-based redirection, pagination, etc.
  - Allows for dynamic content driven by APIs.
  - Adaptable substitute for Markdown utilizing shortcodes
  - Ready-made patterns and templates accessible



  #### **Cons:**
  - Themes use Go templates, requiring knowledge of Go for customization
  - No default theme provided
  - Lacks extensive support for plugins
</details>

---

<details>
  <summary>3. Hexo</summary>

  Hexo is another popular option with several advantages:

  #### **Pros:**
  - Lightning-fast operation
  - Simple deployment with a single command to GitHub Pages or other servers
  - Strong Markdown compatibility
  - Easily expandable with plugins
  - Free themes and plugins accessible


  #### **Cons:**
  - Relatively large community, but primarily non-English speakers (mainly in China)
</details>

---
# Review the Configuration Section in the 11ty Documentation
---

In this lab, we configured our project's root directory using the `eleventy.js` configuration file, which enabled us to modify Eleventy to suit the particular requirements of our project. Here's an example of the configuration:

```js
module.exports = function(eleventyConfig) {
  // Return your Object options:
  return {
    dir: {
      input: "views",
      output: "dist"
    }
  }
};
```
In this setup, the input directory is set to `"views"` for content files, and the output directory is set to `"dist"` for the generated static site files. The passthrough copy feature ensures that static assets like CSS and images are copied directly to the output folder without processing, preserving their original structure. This is achieved with the following commands:

```js
eleventyConfig.addPassthroughCopy("./src/css");
eleventyConfig.addPassthroughCopy("./src/img");
```
These instructions copy the contents of the css and img directories directly to the output directory while maintaining the file structure for stylesheets and pictures.

# What is front matter?
---

The word **front matter** is taken from the book industry, where it describes the content that appears in the first few pages of a book and explains its purpose and production process. Programmers use the term **front matter** to describe a section that sets the context for the content of a markdown file .

---

# How Is It Important in Web Development?
---

In web development, **front matter** allows dynamic actions to be performed on a file, such as:

- Creating **dynamic routing** for templates
- Accessing specific data like a **title** or **cover photo**
- Generating **preview cards**
- Sorting collections based on metadata like **creation dates**

Front matter gives a file the necessary context it needs, allowing metadata to be used without parsing the complete file or depending only on file attributes. This makes managing templates and content much easier.

# Refrences 
- [What is Front Matter?](https://www.scribendi.com/academy/articles/front_matter.en.html)
- [Static Site Generator Overview](https://kinsta.com/blog/static-site-generator/)
- [Jekyll, Hugo, and Hexo Comparison](https://www.techiediaries.com/jekyll-hugo-hexo/)
- [Eleventy Documentation - Configuration](https://www.11ty.dev/docs/config/)
