---
title: URL Shortener - Firebase
layout: portfolio-item
featured_image: /assets/img/portfolio/juan-gomez-674574-unsplash.jpg
featured_image_credit: 'Photo by Juan Gomez on Unsplash'
featured_image_backlink: 'https://unsplash.com/photos/kt-wA0GDFq8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
categories:
- Firebase
- Express.js
- TypeScript
---
As the name states this is a url shortener built on Firebase, it uses Firebase Realtime Database, Firebase Cloud Functions + Express.js, and Firebase Hosting. At it's core the project used these services to query and read from the database to see if any data exits. The services are exposed in two ways; http endpoints that automatically handle things and API endpoints that respond in JSON. Let's walk through some scenarios using HTTP.

## Prerequisites

Before starting let's talk about the project set up. The project is completely hosted on Firebase, this makes it easy to reroute URL requests through various ways. For this project we'll be rerouting requests from `baseURL/r/${UUID}` to the function "reroute". This will allow us to instantly process at the server level. As we will have an API we also need to set up an Express path, `/v0/url/:urlId/`. Lastly, we'll set up two functions, shortenURL and redirect.

## Generating Shortened URL

Now that we have an idea of the set up let's walk through the process of shortening a URL. A user goes to the [project homepage](https://url-shortner-3a035.firebaseapp.com/url) where they can input the url. Once the user hits shorten we check the input to verify it is a valid url. If it is then we use the Firebase SDK to inoke our "onCall" function shortenURL. By using the Firebase SDK we don't have to worry about the function's url, preparing our request, and interpeting our response.

Now in the shortenURL function we sanitize our input, we remove trailing slashes and http info. This helps us avoid duplicates and makes it slightly easier to query. With our sanitized input ready we query the database for any entry that has our input as their original url. If an entry is found then we send the information back. Otherwise we generate a UUID, use it as a key for a new database entry. Once the entry is created we send back this entry. 

Now in our client we receive a database entry, that was either new or existing, we then display this information to the user. And voila, we shortened a URL.

## Using Shortened URL (HTTP)

Consuming a shorted URL is even simpler than generating it because of Firebase. The format of a shorted URL is `baseURL/r/${UUID}`, as per our set up any call to /r/ will be sent to the redirect function. Inside this function we use the UUID to directly find the exact entry in the database for our shortened URL, no querying required! If it exits we retrieve the original URL and send back a response that redirects the user to the original URL. If no entry is found then we redirect to the project home page. 

## Closing Thoughts

This write up isn't meant to detail every step to recreate the project. It's meant to give you an overview of the project. If you're interested in learning more about feel free to visit the project repo and give it a try at the live link above. The project does use TypeScipt and some intermediate features of Firebase. So if you have any questions about it feel free to reach out. 

Thanks for reading.

## Live Demo
[Link](https://url-shortner-3a035.firebaseapp.com/url)

## Source Code
[GitHub Repo](https://github.com/hpquintana/url-shortener)