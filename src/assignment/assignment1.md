---
layout: layouts/default.hbs
title: Assignment1

---
# Project Documentation

## Overview
This project uses [Eleventy](https://www.11ty.dev/) as a static site generator, combined with JSON data to render dynamic content on the site. The structure of the project and the various components are outlined below, along with instructions on how to maintain it.

## Key Components

### 1. Eleventy Configuration (`.eleventy.js`)
The `eleventyConfig` object in this file manages the build process and configuration for the project.

- **Passthrough Copy:** Ensures that static assets like CSS and images are copied directly to the output folder. This is important to include styles, images, and any other necessary files that aren’t processed by Eleventy.
  
  ```javascript
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  ```
  # JSON Data (data.json)
  This file stores the structured data that is displayed on the site. The JSON structure allows the project to easily handle dynamic content like blog posts.
  ```json
  
  "posts": [
    {
     "title": "The Joy of Coding",
    "date": "2024-09-29",
    "content": "Coding is a skill that empowers individuals to create and solve problems. Whether you're working with JavaScript, Python, or any other language, coding offers endless opportunities to innovate.",
    "image": "/img/code.jpg"
    },
    {
       "title": "Cats: Our Furry Friends",
    "date": "2024-09-28",
    "content": "Cats have been human companions for thousands of years, offering both companionship and entertainment. From their curious behavior to their playful antics, there's always something to love about these furry creatures.",
    "image": "/img/cat.jpg"
    }
  ]

  
  ```




# Layouts & Templates

The project uses Mustache templates to render HTML pages. These templates dynamically inject content from the JSON data using placeholders.

Example Mustache Template:

```mustache
<h1>{{ title }}</h1>
<p>{{ date }}</p>
<div>{{ content }}</div>

```
These templates are stored in the layouts folder and help in maintaining a consistent structure across different pages of the website.

# Running the Build Process
npx eleventy

For local development, Eleventy comes with a built-in server. You can start it by running:

npx eleventy --serve

The development server will automatically reload the site whenever changes are made to templates, styles, or data.

You can also run the development server using an npm script:

npm run dev


# Term and Conditions

The Terms and Conditions page outlines the rules and guidelines that users must agree to when accessing or using the website. This page is essential for legal protection and sets clear expectations for users regarding their responsibilities and rights.

# About Page

The About Page not only introduces Jaden to potential clients or collaborators but also enhances user engagement by encouraging visitors to connect. It establishes a personal brand and reinforces the idea that there is a real person behind the website.

#  404 Page 

**Purpose**:  
The 404 error page is an essential part of any website, as it informs users when they try to access a page that doesn't exist. A well-designed 404 page not only provides an error message but also helps redirect users back to the main site, reducing frustration and improving the user experience.

**Implementation**:  
The 404 page is implemented with a simple title and message informing users that the requested page is not available. A link back to the homepage is provided to guide users to a functional part of the website.


## Changes in Project Scope Since Lab 1

Since Lab 1, the project scope has expanded significantly:

### Increased Complexity
Initially, the project was a simple static site. The decision to incorporate JSON data for dynamic content required a rethinking of the project structure, resulting in additional complexity.

### Enhanced Features
New requirements for a pagination system and an about page were added to improve user experience and provide essential information about the project creator.

### Styling and Layout Improvements
The addition of Mustache templates and a structured layout system enhanced the visual appeal and usability of the website, aligning it more closely with modern web development practices.