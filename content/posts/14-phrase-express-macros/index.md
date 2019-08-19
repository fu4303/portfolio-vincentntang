---
date: 2017-01-23
title: '14 phrase express macros'
template: post
thumbnail: '../../thumbnails/git.png'
slug: 14-phrase-express-macros
categories:
  - Tools
tags:
  - git
  - setup
  - version control
---

Are you juggling between dozens of apps on limited screen space? Or find yourself typing the same thing over? Looking for the same code/text/unicode/emoji to copy+paste? Find yourself writing typos in your emails, data entry, or programming? Or doing the same repetitive tasks all the time?

Then you need a macro program.<!--more-->

What is it you might ask?

It is a program that automates common tasks. One of my favorite software packages for this is phrase-express. It works on macOs and windows. You program inputs and get the desired output. If you are familiar with tools like IFTTT or Zapier, then phrase-express would feel right at home for you.

What does a macro look like?

![7e4qcq2[1].gif](7e4qcq21.gif)

That's one simple example of what a phrase-express can do. Text expansion with a keyword like "btw#" to output "By the way". But it can do much more than that.

Below are my go-to automation snippets I've collected over the past year. These snippets are particularly beneficial if you do any sort of IT / programming work as well

I don't cover how to set up phrase-express. But you can checkout these helpful youtube tutorials [here ](https://www.youtube.com/watch?v=D7Y_PJwEAss&t=1s)and [here](https://www.youtube.com/watch?v=Bb1EEySUtg8).

## 1. Email Signature (text expansion)

My number one go to use of phrase-express is my email signature. At work, I run a desktop mail client called thunderbird. While it has a native way to add an email signature, it doesn't give you any flexibility on where it's added. What I used to do when emailing clients was type it out.

That was when I first started to look for a tool to automate some common tasks I had. Below is how I sign emails now:

![6b5BKNL[1].gif](6b5BKNL1.gif)

I trigger my command by typing "VT#", which is my first initial, my last initial, and the "#" sign. This ensures that I don't type "VT" out of context for any reason. For instance, I typing in a shipping address in Vermont, and the state's abbreviation is VT. By adding a # it foolproofs my macro. I don't add the # to the beginning since its common to use social media hashtags this way.

Also, I set so that it only works on Thunderbird. This ensures I don't type out my mailing address to random people online.

Below are my settings for this macro

![bKn9f3l[1].png](bKn9f3l1.png)

## 2. Unicode / Emoji Snippets (Text expansion)

Unicode and emoji snippets can improve the readability of your writing. This might be for an email, a blog post, a journal doc, etc. The following snippets are beneficial to memorize

#### ✓, ✗, ★, →, ←, ↑, ↓

✓ calls attention to something finished. I trigger it with `k#`

✗ to denote something not finished. I trigger it with `x#`

★ denotes something of importance. I trigger it with `s#`

→ to show the next step in the process. I trigger it with `>>`

← to annotate something to the left. I trigger it with `<<`

↑ to reference notes above. I trigger it with `^^`

↓ to reference notes below. I trigger it with `%%`

The ones I used most often is  `→`, sometimes during code commenting. The reason being is that `>` conflicts with code you've written

Emojis also serve as a form of commenting "signature" as well.

This is my setting for the `→` unicode. The other symbols are similar in nature, so I omitted them.

![nREYAcy[1].png](nREYAcy1.png)

## 3: Binding to windows hotkey (remapping keys)

I rarely use my F1 and F2 keys for native applications. The reason is because every software I use has different mappings for those keys. For instance F1 takes you to chromes help page. I'm not sure why you would ever need that.

What I do use for F1 and F2 is a dedicated firefox and chrome app (in this case, my journal app dynalist)

![](T1Lzu78.png)

I have it mapped to windows native **⊞ + 1** and **⊞ +2** keys

![](PcFRiAs.png)

## 4. Binding Hotkey (set application focus)

Sometimes I get caught in the moment doing 10 different things at the same time. Editing an image, sending an email, writing an invoice, printing docs, etc.

End result is a messy taskbar with icons everywhere. Some icons like my development environment(Atom) might have 5 windows open. It becomes hard to figure out what window is for what file.

I end up losing time navigating through the wasteland I created.

![](dOa3Bzo.png)

So if I wanted to find which one of my atom windows is called "code snippets", I can't. The name of each folder is concatenated, so its no longer readable. I have to hover over eacn window to find out

The solution is to have phrase-express recognize this "windows title". You can find this under "Automation" → "Set application focus" → pick a window that's currently open.

When you set it to "maximize", it always keeps that specific app's window to the very top. This way you are always one click away to come back.

I have these macros binded to my F3,F4 keys because I never use them. The only times these keys are ever used are during gaming or excel-development.

If this happens I can turn off phrase-express temporarily. Or set restrict its usage under to certain apps only.

![](JwJTeNB.png)

![](BnluXg5.png)

## 5. Documentation Snippets (Text-expansion)

Many times I'll publish a markdown document and write out what each folder does.

For example this:

> repo-base
> ├── .git
> ├── Folder structure
> │ └── info.rkt ; meta package depends on my-lang-lib
> └── my-lang-lib ; run `raco pkg install` here

Writing this out by hand is time consuming. Or having to find a document to copypaste this takes too long.

## 6. Dummy data (Text-expansion)

Developing often times requires you to use dummy-data as a placeholder. This might be on an ecommerce site or app.

Instead of using a lorem ipsum generator, you can use a macro instead.

![](224oK7X.png)

## 7. Comment Blocks (Text-expansion)

Writing out easy to read placeholder comment blocks can be done with phrase-express. This is helpful if you need to declare what each variable is used for, what the function return value is for, etc.

![](ymSJbab.png)

## 8. Github Tools (text-expansion)

There are many tools that integrate with either github or gist files. For example

> ​​​​​http://htmlpreview.github.io/? + github.com/user/repo/index.html

lets you view that site. I have this set to `html#`

This way I can copy the URL I'm on, type `html#` after, and paste to go to that public index.html file

![](d4MCfpd.png)

## 9. Latex Math Formulas (text-expansion)

I'm currently learning discrete math. I summarize everything in latex format.

However, latex takes way too long to write. Its also rather hard to remember what each syntax does. So I just shorthand everything with phrase-express.

Example of writing set notation

![](3y1Vcdk.png)

Demonstration

![](EQp1gHM.gif)

## 10. Writing unit test cases quickly

On another blog I wrote about this here [Write Unit](https://vincentntang.com/2018/04/12/write-unit-tests-faster-with-this-macro/) [Tests Faster with this Macro](https://vincentntang.com/2018/04/12/write-unit-tests-faster-with-this-macro/)

Here is the demonstration of it in action

![](yPLNoBm1.gif)

## 11. Markdown images (text expansion)

One of my most common usages of phrase-express is to make markdown images.

![](7Gb72vs.png)

## 12. Image placeholders (text-expansion)

I use **img#** to trigger this image placeholder. Same use case with lorem ipsum, its a content holder for web / app development

> http://via.placeholder.com/350x150/0ff

![](4nF9gGy.png)

## 13. Timestamp (macro automation)

Many times I'll put a timestamp on whatever document I am on. This is especially useful if that app doesn't have native support for such a feature. You can use it to help write better changelogs.

Example:

<div><span style="color: #000000;">`!(5/31/2018 14:15)`</span></div>

<div></div>

<div>Setup</div>

<div>![](gSNf5jk.png)</div>

<div></div>

<div>

## 14. Open specific website (automation)

</div>

<div></div>

<div>Sometimes I have a specific website for a webtool I use.</div>

<div></div>

<div>Example with reddit.com</div>

<div></div>

<div>![](ZoCDaHA.png)</div>

<div></div>

<div></div>

## Final Notes

<div></div>

Note that alot of the use cases I indicated can be done with other tools. Things like plugins with your development environment. I prefer to maintain my macros with phrase-express as it is easier to manage. Also it doesn't get me tied to any specific environment.

Also, if there's something that phrase-express can't do, you can checkout autohotkey. Many macro programs are built either on this language or any of its variants. You can find support for things like conditional statements, clipboard parsing, etc.

There were many other macros I had tried. But I did not include them since they either didn't fit my use case or there were better webtools online.

In any case its hard to remember more than 10 macros at a time, so I don't commit to too many. Other macro examples that can be done with phrase-express

*   CSV table formatting
*   Gaming /Mouse macros
*   Clipboard Modification
*   Automatic document generation
*   Text operations
*   Keyboard layouts
*   Random quote generator
*   Random number generator
*   Temporary clipboard
*   Grammer checker

Also, here are some useful articles for other ideas related to task automation:

*   Macro Recording - Check out this [article](https://community.airtable.com/t/bulk-image-uploader-kb-mouse-macro-to-reupload-your-imageurls-localfilepath-images-to-airtable/4503) I wrote here about automation

&nbsp;