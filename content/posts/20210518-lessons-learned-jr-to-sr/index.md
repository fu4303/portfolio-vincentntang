---
date: 2021-05-18
title: 'Lessons learned from Junior to Senior Developer'
template: post
thumbnail: '../../thumbnails/writing.png'
slug: lessons-learned-from-junior-to-senior-developer
categories:
  - Programming
tags:
  - React
  - Learning
  - Reflection
  - Junior
  - Senior
---

3 years ago, I decided to change careers and become a software developer. I had no formal training in software development and decided to learn on my own. Through countless youtube and Udemy tutorials, and hackathons, I landed my first job working on construction management software.

Fast forward to today. I'm a senior frontend developer in charge of delegating & delivering features affecting millions of users at a time. I've come a long way since then and I'm writing this post reflecting on what I learned along the way.

This isn't an exhaustive list but just lessons I learned along the way

## Working with stakeholders

- If you demo to stakeholders, record a video of the demo in advance as a backup. 
- Live coding/testing has a high chance of failure
- The frontend is always highly scrutinized by non-tech stakeholders since it's visual and easier to understand
- When you demo, talk slow and move your mouse slow. Things that are obvious to you are this way since you spent several weeks on a feature. Stakeholders are seeing your work for the first time

## Working with management 

- If you need to estimate a task, assume it's way harder than it is
- Deliver bad news early and good news frequently
- If your PM is messaging you directly for updates frequently, either there's an issue with the process or you are doing things wrong. 
- Push back deadlines as far back as possible during planning phases. You'll thank yourself later. It's better to underpromise and overdeliver

## Working with engineers

- Create living documentation upfront and do it regularly, it saves everyone time. Google docs is your friend
- If you get stuck on a problem for more than 3 hours, ask for help.
- Make your teammates look good and give credit where it's due. The analogy is if you hang out with awesome friends chances are you are awesome as well
- Make an ADR (Architectural Decision Record) when you implement big changes to a codebase. It prevents you (and others) from 2nd guessing why certain things were done 6 months ago

## Code Reviews

- For code reviews, critique the code, not the person
- Make your code reviews awesome by explaining every question a person might come up with

## Leading a team

- Mentoring developers can be fun and enjoyable, but you need to spend time and effort on it
- Plan out your ticket action plan for the team over several days to iterate and improve
- Spend time onboarding newer developers on the project, and write documentation on questions they have. They're looking at things from a fresh perspective
- Always give good candid feedback to your teammates when possible
- Emphasize the big picture and give room for others to be creative/ take ownership of features
- When you pair program, one person is the driver, the other is the instructor

## Time Management

- Plan large focus periods of work where you won't get interrupted
- Don't forget we're all people too. Plan your vacation and sick days
- Think win-win and lump related tasks together and get them done in one go

## Reducing Technical Debt

- Don't over-engineer things unless it's warranted
- If you use two booleans that conflict with each other, use an enumerable instead
- Type safety is effective at reducing technical debt.
- Always use pure functions when possible. This makes the app reusable and obvious at a glance
- Write more tests against iterative and less obvious code
- Use undefined instead of sentinel values. Sentinel values are checks on seemingly random values in the codebase
- Always use a linter. It saves you time and effort
- Don't have competing sources of truth. Use as few scoped variables as possible, and use as few derived/computed variables as possible
- If you need to tackle legacy debt, migrate one feature at at time

## Architectural Rules

- Most systems use soft deletes. This means companies don't actually delete your data, it's just marked as inactive
- Use caching to reduce amount of work service-layers need to make. But don't treat it as the source of truth if possible.
- Never trust the frontend. The backend should handle the vast majority of business logic. Avoid database business logic if possible, it's hard to maintain.
- If you don't need high scalability on your project, just ship it out and don't worry about it until needed 
- Don't put too many shiny things in the app. It increases the risk of failure. Pick preferably popular libraries with good documentation
- Feature flagging helps you deploy and deliver features to other teams while still deploying regularly

## Database Rules

- Keep your database designs as simple as possible to reduce complex JOIN SQL statements
- NoSQL datastores don't have ACID requirements, so it's great when you design a system where users don't talk to each other
