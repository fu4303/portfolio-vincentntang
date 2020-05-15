## Customizing Bootstrap

Bootstrap is the tried and true CSS framework that's been around forever. Ask any webdeveloper if they've heard of it, chances are
they've used it. It's a swiss army knife of tools that helps rapidly prototype webapps, and I'm a big fan of that.

However, it does have it's downsides. One, it looks the same as every other website out there! So you lose the unique value proposition,
and make a site that just feels lazy and not thought out. 

[TODO - INSERT TONS OF GENERIC SITES - caption - imean cmon these aren't unique]

Re-inventing the wheel for every project, setting up whatever flavor of styles and media queries, is a no-go either. 
I enjoy the design process, but I've had clients that complained about every pixel and color on the page. I want to focus on the meat of the application
- the features, the database design, AWS configurations, etc. Things that have a much larger direct impact for the time spent.

Using alternative frameworks doesn't fly either because collaboration means training someone into a new design spec.

Customizing bootstrap's not as hard as you think. You can tweak the colors so that someone won't even notice your using bootstrap, and
 that's a good thing! I'll show you how to do this with tools like React, Vue, or just a simple plain HTML site. I'll even show you
 how to add in your own custom stylesheets, so you have all the power to style anything you want - quickly with 0 hassles.
 This means you can change colors here and there with minimal amounts of effort!

And clear up misconceptions on how to do this, as well as easy workflows for your next project.

## 1. Don't download the sourcecode off bootstrap's website

You might be thinking why not? The bootstrap website even has a tool for it! I've made this mistake too many times. These libraries are all published
on npm (a package manager), so just install it there.

The thing is, you DO NOT want to be source-controlling these files at all. You want to just modify the variables it references, so you can
tweak the settings from the outside. This by design, is a good system because it prevents anyone working on the project modifying bootstrap directly.
So anyone working on the project can confidently say "yap we are using bootstrap, and it's only been modified by what should be modified". There is a caveat, and this is making sure your source controlling the version of bootstrap your using.

Bootstrap source code uses `scss`, or pre-compiled css.

You'll need a tool that compiles the `scss` file into a plain good ol' `css` file that can be used on the web.
If you use React, Vue, Angular, or any other mainstream javascript library, these have tools you can use already. Like webpack

If you aren't using these, you'll need to use grunt, parcel, gulp.js, prepros, or similar. I won't cover this part in particular, but
I'll show you how to set this up with React.

So let's say we're making a fresh react app

```
npx create-react-app my-app
cd my-app
```

So install these modules (you'll need to download [nodeJS](https://nodejs.org/en/) if you haven't already)

```
npm install bootstrap
npm install node-sass
```

This will download `bootstrap scss files` into your `node_modules` folder. `node-sass` is used to compile these files

Next thing you want to do, is import a `main.scss` file into where you'll be calling this file. 
We call this a rollup file, because it's going to referencing a ton of other files into it.

So now we have something like this:

```

- 

WIP
