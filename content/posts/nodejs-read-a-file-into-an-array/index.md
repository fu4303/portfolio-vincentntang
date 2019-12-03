---
date: 2019-11-25
title: 'Read a local text file into an array with NodeJS'
template: post
thumbnail: '../../thumbnails/js.png'
slug: read-local-text-file-nodejs
categories:
  - Javascript
tags:
  - nodeJS
  - javascript
---

You know basic Javascript. You're digging into the fundamentals of NodeJS, or server-side javascript. One of the first things you need to learn is how to read a local file on your computer.

This is useful if you are running an isolated test in a list of inputs. Examples include solving coding puzzles in your favorite code editor. Or maybe taking a list of CSV inputs and hitting API endpoints with it

## Instructions

First, [install nodeJS](https://nodejs.org/en/download/) to the latest stable version. Next, create a blank repo. 

In that repo, create two files 

- `001.js`
- `001.txt`

In your `001.txt` file, copy this data below:

```
1
2
3
4
5
6
7
8
9
10
```

We need to add the nodeJS code to read this local file. Here it is:

<div class="filename">001.js</div>

```
var fs = require('fs');

var readMe = fs.readFileSync('001.txt', 'utf8').split('\n');

console.log(readMe,"readMe");
```

nodeJS comes preconfigured with a set of standard library tools you can use. One is called the `fs` module, which grants you methods for reading local files. First, you require the module. Next, you need to specify the encoding, in this case `utf-8`. Because each input value is across a new line input, you need to use Javascript's `split` method. This creates an array seperated by each new line designated by `\n`

You need to run the file afterwards. If you use visual studio code, press <kbd>cmd \`</kbd> and this will open a terminal.

Type this command and hit enter

```
$ node 001.js
```

The resulting execution returns this value:


```terminal
[
  '1',  '2', '3',
  '4',  '5', '6',
  '7',  '8', '9',
  '10'
]
```