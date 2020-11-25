---
date: 2020-11-25
title: 'On writing a custom RSS feed for GatsbyJS'
template: post
thumbnail: '../../thumbnails/gatsby.png'
slug: writing-custom-rss-gatsby
categories:
  - Programming
tags:
  - Debugging
  - Rss
  - Gatsby
  - React
---

We recently released a podcast site built in GatsbyJs called [CodeChefs](https://codechefs.dev). I made a write up on how to build your own podcast site from scratch [here](https://www.vincentntang.com/custom-podcast-site-gatsby-react/).
Including how to generate the RSS that's consumed on different podcast platforms like Spotify and iTunes.

However, we've run into an issue. We couldn't get one of the podcast platforms, [stitcher.com](https://stitcher.com), to support our RSS feeds. During the submission process, it would just get held up:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/8dct2koihizef5nrv5ew.jpg)

I reached out directly to Stitcher for support, in hopes to resolve the issue. It just seemed weird that all other platforms but this one supported our RSS feeds. This was the support response I got back:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/8p5pnr3yp32feevg0qwr.png)

Not terribly helpful, I got the "reach out to the admin of the site for assistance". Unfortunately, that's me! I did a little digging and found that stitcher uses [http://validator.w3.org](http://validator.w3.org/) for validating RSS feeds. Upon submitting the feed, we got this error:

- `Schema Error: XML document with no namespace; cannot determine any schema to use for validation.`

Upon searching through this issue, I found NO solutions whatsoever for resolving this issue! It just became more questions and no answers. 

## Back to the drawing board

Instead of taking a top-down approach to the problem, I felt it would be best to understand how Gatsby is generating RSS feeds.

Through some digging, I found the plugin Gatsby uses for RSS feed generation is called [Gatsby-plugin-feed](https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/). And through a separate [issue](https://github.com/gatsbyjs/gatsby/issues/27476) I created on Gatsby's Github Page, I found out it uses [node-rss](https://github.com/dylang/node-rss) behind the scenes to generate the XML for the RSS.

Upon looking through the repo, I was slightly disappointed. The repo is in maintenance mode, and the last PR merge to it was back in 2017. There were dozens of open/closed PR that were ignored and didn't pass [TravisCI](https://travis-ci.org/), which meant the author has since moved on with the project. Meaning if I open a PR and actually implement a fix, it probably would be ignored.

I decided to dig through the issue log regardless, curious as to what problems people were having. I stumbled upon this random comment:

```
Experiencing similar problem with VLC (for a podcast). 
Finally got it to work by removing the CDATA section from the title tag. 
Now the feed is being recognized by the reader.
```

A possible solution to the problem I'm having! I didn't know what [CDATA](https://en.wikipedia.org/wiki/CDATA) was actually for, but upon searching Wikipedia, I found it's mostly used to support `&` characters. Which makes sense, our site was currently using that character for the `<author>` tag.

Now I checked the RSS our site was outputting:

```xml
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">
<channel>
<title>
<![CDATA[ Code Chefs - Hungry Web Developer Podcast ]]>
</title>
<description>
<![CDATA[ Looking to expand your skills as a Web Developer? Vincent Tang and German Gamboa break down topics in Javascript, NodeJS, CSS, DevOps, AWS, and career development! ]]>
</description>
```

Our site was outputting `CDATA` tags on the `<title>` and `<description>`. So this clued me in on a potential fix. So I needed to modify the RSS generator such that it no longer outputted those tags.

I scoured through the `node-rss` package to see if there were any details on how to set this up. RSS feeds couldn't be that difficult to make could they? I decided to inspect the source code instead, which ended up being a mere 189 lines of code:

```js
function generateXML (data){

    var channel = [];
    channel.push({ title:           { _cdata: data.title } });
    channel.push({ description:     { _cdata: data.description || data.title } });
```

I found exactly what I was looking for! How the CDATA was being generated on our site. Unfortunately, the `_cdata` tag was hardcoded here for both the `title` and `description`, which meant there is no configuration for disabling it.

That just makes things so much more complicated. I didn't even know if this solution would even work! I'm basing all of these decisions just on a random comment I came across. 

Therefore, I needed to validate if removing the `_cdata` tags would fix the RSS issues I was having. 

## Running a local MVP test

I needed a quick and dirty test. Since the `gatsby-plugin-feed` was already installed on our repo, and probably imported `node-rss` behind the scenes, I figured I could just modify the file directly. I removed the `_cdata` values here:

```js
function generateXML (data){

    var channel = [];
    channel.push({ title: data.title });
    channel.push({ description: data.description || data.title});
```

and the new RSS feed worked! But I needed a way to test this out against https://validator.w3.org/. Unfortunately, using `localhost` doesn't cut it, as the site needs to be deployed.

I didn't want to run this through our CI/CD pipeline through [Netlify](https://netlify.com/) until I was sure it worked. What I did instead was run [ngrok](https://ngrok.com/), which tunnels information through a port of my choosing. So `localhost:8000/rss.xml` now just became accessible at `https://cb996f9480ed.ngrok.io/rss.xml`. 

Great! Now we're in business! I submitted this publically available URL on [stitcher.com](https://stitcher.com) to see if it worked:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/ww43gi0lf6u95rivp2h9.png)

And it did! This meant `CDATA` had to be removed on the `<title>` and `<description>` for the RSS to be accepted at this site

## Making the solution permanent

Yet another dilemma. Even though I had a working solution, I still couldn't actually get this to run on our site. You aren't supposed to modify `node_modules` locally, as this means another computer can't duplicate the deployment process. This means I still can't deploy on Netlify.

I only had a few solutions at hand:

1. Modify the RSS package with a PR, and make another PR towards the Gatsby Plugin
2. Make a Gatsby Plugin with the forked RSS package

The 2nd option made more sense, so that's what I opted to do.

Through Gatsby Docs, I found you can create a local plugin [here](https://www.gatsbyjs.com/docs/creating-a-local-plugin/) by running this command:

```
gatsby new gatsby-plugin-foo https://github.com/gatsbyjs/gatsby-starter-plugin
```

This generates a starter plugin that I could modify. Next thing I did was convert this starter template, and merging this through the source code for [Gatsby-plugin-feed](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-feed)

I changed the dependency so instead of using `node-rss` here, it would use my custom modified package instead

There were numerous issues putting this all together. Gatsby for whatever reason used `import` statements on these backend files, which is Javascript syntax, not `nodeJs` syntax. So I modified accordingly, but this created several async/await issues that then had to be fixed.

The next set of issues I ran across was installing `package.json` in both a subfolder and a root folder. I did some research and found that `npm` ships with a default config called `postinstall`, which is a command that runs after `npm install`. So you can install subfolders of your choosing, or even do a rainbow match of folders to install

Once everything looked good, I made a [PR](https://github.com/vincentntang/codechefs/pull/39) against my `development` branch so Netlify can rebuild to these newest changes too.

And it worked!

Feel free to check out the source code and local plugin:

- [source code](https://github.com/vincentntang/codechefs)
- [rss](https://codechefs.dev/rss.xml)
- [codechefs website](https://codechefs.dev)
