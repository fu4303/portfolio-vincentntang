---
date: 2019-01-18
title: 'Things I wish I knew for my first tech talk'
template: post
thumbnail: '../../thumbnails/writing.png'
slug: things-I-wish-I-knew-for-my-first-tech-talk
categories:
  - Personal
tags:
  - git
  - setup
  - version control
---

I just finished my first technical talk today at OrlandoJS! At my Orlando Devs meetup last December, there wasn't a speaker for January. So I volunteered. I reached out to Carlos from OrlandoJS last month on the topic of "Rendering Tale : Comparing Canvas, SVG, WebGL"

A topic to which I practically knew nothing about, but was really passionate for. Because I rely on these technologies everyday with software both at work and personal hobbies.

This is a summary of things I wish I did correctly going up to the talk

### 1. How Much Information There is To Sift Through

I had an entire month to prepare. Time to learn the topic and really hone in on the details. My original plan of action looked something like this

1.  Learn it (1-2 weeks)
2.  Apply it (2-3 weeks)
3.  Use lessons learned, apply to talk as examples (3- 4weeks)

However, I ran into numerous issues. I couldn't determine _what_ really was the best way to learn these topics. Crowdsourcing the information is how I normally do this, using a breadth-first search NPS (net promoter score) on popular websites like reddit. Basically, I just search relevant topics differently, dozens of times using google. Things like "Canvas VS WebGL" , "How to learn Canvas?", "Benefits of using SVG"?. I count how many good occurences occur for each subject[1]. And rate how authoritative they are on the topic, depending on post history, writing style, etc.

The list goes on. What I didn't realize is there's hundreds of resources on this topic, and a lot of it is outdated. Because webstandards changed. So I first had to learn it's history, and auditing literally _everything_ on the web.

Things like - who is the most reputable source on this topic? Can they also explain in an easy to understand format?

So I spent the first few weeks, just sifting through this information. I read, almost every topic possible to just to be familiar with different terminology. I had to wait a few days for that information to sink in. And document things along the way. Auditing each course / tutorial took an enormous amount of time as well

Doing this alone took over 2 weeks.

You could argue that just jumping in would be faster, and this is what I do as well. The book "[thinking fast and thinking slow](https://www.nytimes.com/2011/11/27/books/review/thinking-fast-and-slow-by-daniel-kahneman-book-review.html)" highlights how I learn. I learn things from a bottom up approach (actually coding) and a top level down (breadth NPS search on topics)

### 2. Understimating Complexity of topic

You could spend years on each of these topic and still not grasp it's full level of implementation. It's very hard, hencewise there's only a handful of experts related to each topic.

For instance, let's take webGL2. It's used for things like playing video games on a browser. Or showing 3D representation of objects on things like [thingiverse](http://www.thingiverse.com). To actually comprehend this topic, you would need to know the following pre-requisitives

*   Linear Algebra
*   Datastructures and Algorithms
*   C++/C - building your own raytracer and/or 3D engine

Unfortunately I barely know any of this, and would not have time to learn it in a short time spam. I still audited many tutorials on how to build this in C++/C (e.g. I watched it at 4x speed, just to the gist of how complex it is).

So I decided to only briefly touch on those topics as result. And went to how to implement webGL2 using a library like Three.js. Which handles all the math behind the scenes.

The same was true for SVG's and Canvas, there is suprisingly a huge amount of math you need to know about. Which I didn't know from the start, because I knew so little about it

### 3. How to phrase things

When I decided that I would do this topic, it intrinsically made sense to me. SVG, WebGL, Canvas, are all related. I've seen a few hundred codepen implementations and it's code. I could visually identify which technology was used where.

But how do you explain that to an audience?

"It takes experience to sift this out"?

That's not a very useful way of phrasing things. It doesn't enlighten the audience at all. You might as well be stroking your ego at that point. They can't abstract away that information to something practical.

I used the [feyman technique](https://mattyford.com/blog/2014/1/23/the-feynman-technique-model)[2] to explain it to a rubber ducky multiple times. Once I hashed most of the bits, I had some help in proofreading my talk. But that was literally the day beforehand, so I didn't plan appropiately

I started to break things out into it's smallest component form. This is something I do all the time with dynalist.io, but I used google doc instead. Because I had to share my draft proposal to the meetup organizer. This way they can see what the "course syllabus" would look like, and process would be transparent

### 4. Learning How To Make Good Slides

There's so many ways of writing slides! And many ways of building a slidedeck proposal

I adopted slides.com, because all the most respected developers I follow use it. With good reason. It just works ^TM, and it's easy to use.

But, you need to think about a huge number of things

1.  What's the room going to be like?
2.  Should the slide background be dark or light?
3.  What color and font should you use?

It's simple things like these you don't think about. Maybe you don't if you do conference talks all the time. But I'm a beginner! So before I could even write slides, I had to run UX A/B tests.

Nobody wants a [prezi](http://prezi.com) presentation on a technical talk, which induces nausea. Transitions, animations, and color all must support the theme and organization of the topic.

So there was alot of experimentation. A lot of research. Designing the slides was a UX challenge in of itself. And determining the process workflow for adding gifs/videos/iframes etc.

This was all done in parallel to researching the topic.

### 5. How Long It Would Take to Write Demos

My original plan was to knock out at least 3 demos, created by scratch from my own ideas. I only made (1). Everything else I copied from other sources, because I simply had issues debugging.

So I took the best resources I found online for learning these subjects. And, more or less, copied the verbatim intro. I even used the same phrasing as well. Like what an "SVG" is. Or what "WebGL" is. There was no good soft introduction for HTML5 canvas that I found, so I had to draft my own.

I took that other video intros to the subject as a starting point. But all examples / reference material thereafter, I wrote the talking points myself

### 6. How Few Good Analogies there are on newer topics

On very new and recently adopted technology, (webGL2 / threeJS), there are very FEW good analogies explaining it. I looked everywhere on each MOOC and spent $100 on courses, just for the purposes of research.

It was only 2 hours before the talk on webGL2, that it finally clicked. The way you write ThreeJS is more or less how movie scenes are produced. I only know this because I watch too much [corridorDigital](https://www.youtube.com/user/CorridorDigital). And I've done a bit of youtube production work at one point / played around with blender.

The syntax is actually the same. I looked through special effects blogs for a good picture, describing how it worked. I found it.

I present you, a harry potter scene. _(to my surprise, only half the audience watched harry potter)_

![](ZKRkKAD.png)

How it works is like this

*   Scene - this is where your videoshot takes place
*   Camera - it's a camera
*   Renderer - magical processing behind the camera
*   Lights - There's a huge number of lighting at movie scenes. Point lights, soft fill lights, reflectors, etc
*   Mesh - Dumbledore himself - he's the only object we care about. I took an asset from 3D warehouse so I can treat it like an object
*   Geometry - The shape of Dumbledore himself
*   Material - Texture of 3D Dumbledore

By tying the example to something people could visually understand, this creates a "memory palace of sorts". You build synapsues (brain connections) much easier. It's much like an elevator pitch. For instance, you can describe "linkedin" as a "facebook for business users".

### 7. Real World Examples List

These lists... were incredibly difficult to find. Many companies don't publish these things openly.

Luckily I'm always compiling this information into pinboard _(a bookmarking tool)_, amongst many other tools.

I break down websites all the time, that's how I learn things. Delete items off the site, run it through chrome DevTools, fork the repo/set debuggers. See what happens.

I noted a few different common implementation patterns in my talk. But I skipped over it because the talk was way too long. I tried keeping the examples short/sweet. So I selected the best to represent each talking point (webGL, canvas, SVG)

### 8. Preparing hardware

An ungodly amount of time running hardware checks. Much like a lightning studio assistant. There's just so many things to consider. Here are some examples

1.  Where's the room located - is there a large monitor?
2.  Do I have proper spacing to use my mouse?
3.  Where should I position my camera?
4.  Is the battery charged up all the way?
5.  Did I run OBS (a video recorder) on macOS?

There was about a dozen more hardware checks like mic checks, but you get the point. Everything went smoothly. However... I made some really big mistakes. Namely, I recorded my webcam on macOS, _not the screen_. Where almost all the important information is at. The 2nd error I made is (_the audience doesn't really matter in the scenes)_. Nobody watches a youtube video to see the audience, they came to the presenter! However, it's important to keep in mind where the mic is located, and which directionality it's settings are at. My rodemic gets defaulted to cardinal (which is sound pointed at it's source).

So you could hear me asking questions, but not the audience's responses / questions. One thing I've learned about public speaking is you _have to repeat the question the audience states_. Because people may not have heard it (if they're sitting in the back), and the mic not might be pointed at them either

My angles were also a tad off when recording. The full sized monitor should have realistically taken up at least 50% of the display, but it was only maybe 25%.

Lastly, since I'm recording on my old samsung S6, I forgot to clean up hardware space needed for the recording. Luckily everything recorded, minus the last slide. Which was probably the most important one too. I did make sure my phone was set to "airplane mode", "powersaving on" beforehand, or else battery would have depleted / overheated.

### 9. Preparing Notes

Preparing notes took... quite a bit of time.

Slides.com is great in that you could actually write speaker notes. I had it synced up via SMS to my phone. So my phone could control my slides. Pretty dope technology.

I learned from great speakers that you should really limit how much information is on each screen. You can't just repeat verbatim read your slides, what's the point of the talk then?

Figuring out what to say... between each transition and each slide was challenging. I used intro slides from a variety of courses/blog materials that I sourced as a starting point. Then modified things from there.

### 10. Dry run Livecoding / Designing

I had to demonstrate live how an SVG is created and ported over to actual code. As well as ways to manipulate it. This is something you just simply have to see the whole process to appreciate.

No amount of slides can convey that information correctly. You just have to do it.

I had multiple contingency plans in the even figma (my UX design tool) failed. Anything from failed servers, to not being able to login, etc. This was important so I practiced how to create the same SVG asset multiple times, in different programs.

Next, porting that code live meant I had to memorize a decent chunk of code. I don't program for work, or do this as my day job.

I had to spread over this routine for a few days, to really hone it by muscle memory.

### 11. Adapting to ebb and flow

Since I didn't dry run this talk at all, there were quite a few errors that occured. Some sites didn't load up. No videos / gifs were made for some of these. My slides also heavily depended on iframes to other sites, and codepen files. I forked these all to my own account in the event the author changed it last minute.

Notably, the transitions were off. Some slides I expected 5-6 transitions to "lightly introduce the topic", but the information got shoved in their face. I had to make the best of it. Some other things unexpectedly occured, and I had to transition quickly

For instance, live coding was more challenging than I thought. My program failed to render, luckily I had a backup of the final copy. I even had the code printed on a piece of paper too! And dry ran that as well

I didn't expect my graphics card to kick on while previewing a webGL file. You could hear it thumming on my macOS, but this only made explainations work to greater effect.

However, I did fail in a few regards when explaining WebGL2. WebGL2 is very much tied into the gaming scene, because well it's used to render browser games. And it's based off openGL which powers video games.

Namely, I used examples that people didn't understand. I'm a lifelong gamer _(every genre, and many competitively at onepoint). _I used actual examples like describing how Crysis (_a video game really far ahead of its time in 2007) _would be used as a GPU (graphics card) benchmark. Because not many computers could run it. Most people in the audience were ages 20-40 years old, but only 2 out of 30 people got the reference.

I also flubbed and repeated myself two or three times, because I was on an adrenaline roll. But these things happen though. I told a lot of corny jokes and asked the audience lots of questions. Just to make sure people were actually paying attention. Plus, it's boring hearing one person talk for 1.5 hours anyhow.

My 9 PM alarm clocked on. It was then I realized that how long the talk actually went for, so I skipped over and went straight to 👋 Questions.

### Summary

So that's the story of all the things I wish I knew about, or did correctly for my first talk. I haven't yet uploaded the talk yet, because I'm still running through ffmpeg and downsizing the file to upload to youtube. It's not a finished product so I'll just keep it unlisted on youtube here on my "talks" section.

Because I didn't record the screen but rather my webcam, the quality is going to be not so great. I would have to rerecord many parts of it to salvage the content I made.

In either case, preparing 1 month for this talk was _hard_. The few days leading up to the talk I had sleeping and anxiety issues. This wasn't even a really difficult talk either - all the devs in my area are chillax. But I treated it as if it were a full blown, conference talk. Because why not.

I had great feedback though, someone stated it was one of the best talks they've heard, and someone else said it was more like 4 talks in one. It's always inspiring when someone appreciates the time, content, and effort you put forward.

I probably won't be doing any talks for awhile. It's a huge commitment to make. You don't want to underdeliver and waste everyone's time.

[Slides are here ](https://slides.com/vincentntang/deck-fda2ce92-d3f7-4f63-960e-2ae309b12f33/#/)

### NOTES

[1] It's pretty similar to how when you shop for a product on Amazon, the first thing you do is (1) look at product reviews, (2) read the bad reviews, (3) read the good ones. Then determine which ones are faked and which aren't. And pull it all together with youtube sources to validate information

[2] Basically, explain things one time. Does it make sense to an audience member? In this case, a developer that might not know anything about the topic. If not keep explaining in a different way every time. With each iteration, you learn the subject better.

[other] - A  lapel mic for better audio quality. Camera was positioned at a bad angle so there were major auto focus issues.