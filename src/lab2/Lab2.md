---
layout: layouts/default.hbs
title: Instructions
---

# Overview of Headless CMS Platforms

## Contentful Overview

**Contentful** is a cloud-based, headless CMS that enables developers and content editors to organize and distribute content across multiple platforms using powerful APIs and flexible infrastructure.

### Key Features:
- **API-First Design**: Seamless integration and delivery across platforms.
- **Flexible Content Storage**: Centralized content management from multiple sources.
- **Developer Tools**: Reduces migration needs, minimizes custom dev work, and eliminates content backlogs.
- **Product Management Tools**: Replication, reuse, and syncing of components.
- **Marketing Tools**: Consistent messaging across regions, channels, and brands.
- **JSON API Compilation**: Content is compiled into a flexible JSON format.
- **SDKs**: Available for popular programming languages.
- **Integrated Services**: No need for third-party plugins.
- **Content Delivery Network (CDN)**: High-speed delivery of content globally.

For more, check out the [Contentful Overview on HTML Burger](https://htmlburger.com/blog/what-is-contentful/).

---

## Introduction to Ghost

**Ghost** is an open-source publishing platform built on Node.js, designed for creating a variety of content-driven experiences, such as blogs, newsletters, and paid content.

### Why Use Ghost as a Headless CMS?
Ghost offers an API-friendly headless CMS setup, with a default frontend theme (**Casper**) that is:
- **Responsive**: Ensures a consistent reading experience.
- **Dark Mode Support**: Customizable for user preferences.

Ghost's architecture allows for seamless integration with custom frontends.

### Key Features of Ghost:
- **SEO-Optimized HTML**: SEO-friendly content structure.
- **Markdown Support**: Simplifies content creation and publishing.

Explore more with the [Guide to Using Ghost as a Headless CMS](https://draft.dev/learn/using-ghost-as-a-headless-cms).

---

## Introduction to Prismic

**Prismic** is a fast, user-friendly CMS that simplifies content management and allows collaboration. It’s used by companies like Google, Levi's, Netflix, and Deliveroo.

### Key Features of Prismic:
- **Slices**: Dynamic sections for easy content management without developer input.
- **Media Library**: Upload, optimize, and manage images, videos, and audio files.
- **Image Editing**: Crop, resize, and add metadata for SEO.

For more, explore [Prismic: The Go-To Headless CMS to Scale Digital Experiences](https://www.adforum.com/tribune/prismic-the-go-to-headless-cms-to-scale-digital-experiences).

---

## Introduction to Sanity

**Sanity** is a platform designed for structured content, allowing seamless content creation and distribution through a comprehensive API suite.

### Why Choose Sanity?
- **Real-Time Collaborative Editing**: Work with teams in real time.
- **Flexible Content Structures**: Adaptable content management.
- **Data-Driven Rich Text**: Unique HTML-free rich text.
- **Open-Source Editor**: Built with React, allowing customization.
- **API Suite**: Full API capabilities for backend integration.

For more, check out [Sanity: The Headless CMS for Structured Content](https://www.sanity.io/headless-cms).

## Why Did I choose sanity for lab2? 

I chose Sanity CMS for Lab 2 because it offers great flexibility in managing and structuring content, and allows for real-time collaboration. However, it was a bit difficult and complex to learn at first, especially with its unique approach to content and the setup process. Although I didn’t get to fully explore everything, below I’ll share my journey so far. With more practice and time, I’m confident I’ll master it in the future.

## My journey With Sanity
---

- As you can see in the photo, this shows the data generated when you install Sanity. It creates categories that you can fill with whatever you want in your JSON file.

<img src="/img/sanitycode.png" alt="Responsive Image" style="width: 40%; height: auto;">

- After I installed the software and set up Sanity, I created a collection type, similar to Strapi, which was focused on the future of AI.

<img src="/img/collectiontypesanity.png" alt="Responsive Image" style="width: 40%; height: auto;">

- Here are the host sites that are connected to the project's API.

<img src="/img/sanitylocal.png" alt="Responsive Image" style="width: 40%; height: auto;">

---

## Introduction to Strapi

**Strapi** is an open-source, user-friendly headless CMS designed for flexibility and scalability. It allows for dynamic content modeling, flexible API integration (REST and GraphQL), and a customizable admin panel.

### Key Features of Strapi:
- **Open-source and self-hosted**: Full control over data and hosting.
- **Customizable Admin Panel**: Tailor the content management interface.
- **API-first**: Fully customizable API (REST or GraphQL).
- **Plugin System**: Extend functionality with custom plugins.
- **Role-based Access Control**: Manage user permissions for enhanced security.

Strapi is ideal for projects requiring full control and flexibility.

For more, check out [Strapi discussion on Stack Overflow](https://strapi.io/headless-cms).

### Why did I choose Strapi?
---
I don't have a long answer for why I chose this headless CMS. Even after researching the five options, it ultimately came down to Strapi being the easiest to customize and extend if more features are needed. I had to pick one, so I tried Strapi from the given options. It was super easy to set up, with plenty of resources available online on how to install it, configure it, create collection types, and more. Since Assignment 2 requires flexibility and quick integration with various front-end technologies, Strapi was the most practical choice for meeting those needs. Honestly, after reviewing the other CMSs, it really came down to Strapi or Sanity, which I’ll discuss more in the next slide.

### My journey with strapi
--- 
- First, I had to install the application, so I went to the website and found the command to enter into my terminal:  
   `npx create-strapi@latest my-strapi-project`.

- Once you enter the command, it will present you with a series of options. Eventually, you'll set up the admin panel, which will then direct you to that page.

- After everything is set up, you can start by creating a **collection type**. Depending on the data you want to store, you can select from a variety of options. For example, since I wanted to create a blog post, I selected fields like **title**, **content**, and **date**.
   
<img src="/img/collection.png" alt="Responsive Image" style="width: 40%; height: auto;">


- Then, I created a **blogAPI** to fetch the raw data file, as shown in the picture below. I named it **blogAPI**.
  
<img src="/img/apitoken.png" alt="Responsive Image" style="width: 40%; height: auto;">

- Then, in **PowerShell** (as seen in the picture), I used **curl** commands to retrieve the raw data file. Note that I could have made it public and accessed it on the web, but that would allow everyone to view it, which isn't ideal. Instead, I kept it private so that only I could access it.
  
<img src="/img/rawjson.png" alt="Responsive Image" style="width: 40%; height: auto;">

- I used a JSON formatter to make the raw JSON file look sharp. In future scenarios, I will call the JSON file created in Strapi directly, rather than just formatting the raw JSON and manually dropping it into my code. However, this is to demonstrate how I used Strapi in this case.
  
<img src="/img/jsonformatter.png" alt="Responsive Image" style="width: 40%; height: auto;">