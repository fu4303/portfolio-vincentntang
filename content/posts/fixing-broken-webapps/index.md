---
date: 2020-04-16
title: 'Inheriting a Broken Javascript Webapp and How to Fix It'
template: post
thumbnail: '../../thumbnails/computer.png'
slug: fixing-broken-webapp
categories:
  - Backend
tags:
  - git
  - debugging
---


## Inheriting a broken Javascript webapp? How do you fix it?

Next month marks my first official anniversary as a software developer!

So recently I got tasked with fixing a broken web application. I won't go into details about the projecet (I signed an NDA for a reason), but it has a frontend and backend component(s). As a developer that works at a web agency, it's not uncommon to get a broken web application handed to you. Sometimes the previous developer on the project got frustrated with the client, and left halfway in. No worries, it might be a steaming pile of ****, but we can make it beautiful again :)

Here's what I've learned in debugging a broken web application, and the steps I took to resolve it

## Get access to Github Repo

First things first, is to get access to the github, bitbucket, or any other similar repository.

Digging through the code is one thing, but you really need to understand the thought process behind who wrote it. What was their last commit? Why did this guy add a comment here?
When you have access to the repository, you can install a plugin in Visual Studio code called gitlens. Or any other editor for that matter

This gives you superpowers in seeing the *history behind what changed over time. Sometimes those commit name could simply just say "Commit", (unfortunately I know someone that does that :facepalm:)
But in other instances, it might give you a clue or insight of what changed over time.

I had some burning questions when I got this broken webapp handed to me. How did this dude spin up a database? What are these random excel files that seemingly do nothing in the app do?

It all made sense when I saw this log tied to those files:

```
"migrated old website to new one"
```
 It tells a story about a person who had to migrate one system to another. So basically those were just unused legacy files

If you can't get access to github, don't worry! If someone else has had access to it, and has it on their computer, there's a hidden [.git] folder generally with this information. 

## Test the live-site if it still works

Sometimes you get blessed and find out there's still a live site to work with. Nobody knows how it works, or has access to the server, but _the site magically is still on the web_

You can treat this as a way to run a simulated end-to-end test. Basically login, check your network tab, and see what backend endpoints get called. It might look like this:

```
http://api.somewebsite.com/do-some-stuff
```

If you determine what parts of the URL are actually unique, you can determine what the actual endpoint is called

```
{{APIURL}}/do-some-stuff
```

If this were a nodeJS application, you can immediately identify which route on the frontend called which controller. This is *extremely* useful to know, because once you identify the main page of the app, you can identify the most important endpoints

## Access the database if possible

If you get lucky and still have access to the database, access it. Make a copy of the SQL database (if its relational), and analyze it's contents using a tool like SequelPro on MacOS. 
It might take awhile, but it'll give you insights about how things are structured in the app. And what the backend is doing to grab said data

Sometimes the data might look really weird, and might raise more questions. It could be totally denormalized (two cells of data in one cell). If you run a ORM (object relational mapper), you can see how this correlates over to the data itself.

I inherited a hugeee database file (well not huge, but still large). Only a few GB, some files spanning millions of rows (okay that's still not that big, jk). 

My original thought process is there were image blobs stored here, but it just ended up being alot of data.

## Find the most important endpoint to test

This ties into if you have access to the live-site. The most important endpoint usually is the one that fetches gigantic amounts of data.

Image if your facebook. What's the most important endpoints here?

```
Logging in
Grabbing all your friends in your friends list
Grabbing all the latest posts, related to friends + sponsors
```

It's way more complicated than that in reality, but it's a start. If you still have access to the live-site, you can run a tool like postman if its unsecured to grab that data. Then run similarly tests to your backend, to make sure the backend + database are connected

## Inspect the Package.json

Package.json shows what dependencies the app uses for it to run. It's not a foolproof case, sometimes developers like to install more things than they actually use (pst that's secretly me sometimes). It'll give you insight on how the software is architected. What tools are used to handle HTTP requests, routing, and all that good stuff. So if you see an abnormal error anywhere near related to what your building, *google it*.

Another useful tidbit is seeing what the `scripts` are in this file.

Scripts tell you *how* the application is supposed to be turned on. Which file gets hit first? If your working in a React/Angular/Vue app, there's default configurations for these. Check those out they clue in how the app works as a whole

## Check ENV keys

So you got this far eh? ENV keys are environmental files (basically passwords that aren't git tracked). If this is a nodeJS application, there's a few quick tips of grabbing all the ENV keys used

```
CTRL+F -> process.env
```

Run this on both the backend and frontend of the application. It'll list every key used, and how it's all tied in. Dump these files into a `.env` file at the root level. Press run and pray that it magically works.
Didn't work? hm well maybe your out of luck. Or you can try...

## Check port configurations

Ports are how devices connect to one another. It could be through an internal network, the internet, etc. In any case, when you build a local environment, you generally use port configurations. Like the frontend will be on 

```
localhost:3000
```

and the backend might be on 
```
localhost:5000
```

if the site gets deployed to a server like DigitalOcean, AWS, Azure, whatever. It usually uses a redirect from that port to an actual domain name (we won't get into this, but this is what `.htaccess` files are for).
You might need to configure these ports manually to talk to your database too

## Still fails - what now?

Just uncomment everything in the app, from where the app gets booted up. Reinitialize things one by one, checking your console and terminal for errors.
It'll give you a better idea of what things are causing what errors.

Take a break, take a walk, come back to it again. Or just start fresh if it's unsalvageable.
