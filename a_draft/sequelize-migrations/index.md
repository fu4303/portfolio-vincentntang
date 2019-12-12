### Guide to relational database migrations with NodeJS Sequelize

Database migrations are necessary in app development. It's where you change how your database stores data. Maybe you've got this crazy new feature that needs to be built in your webapp, but don't have the tables or columns of data to support it. Or maybe the app was more complex than it needed to be, so you need to delete and change table relations.

Migrations can be tricky though. You'll need to consider how this might impact your production vs staging workflow. Or how it might slowdown or speed up the process when working with other developers. 

Sequelize is a popular tool for having your NodeJS code talk to your relational database without having to write SQL. It isn't just limited to dropping/adding tables or columns, but more common operations like reading and writing data to it's tables. It's used in a number of databases - such as MySQL, PostGres, etc

### Who this article is for

Your a backend developer (maybe new like me!) and got overwhelmed by all the ways of migrating a database. You've stumbled upon the vast documentation available to you, but don't understand how everything fits together to build a working product. 

Here's where this guide comes in! I cover the following topics:

- Basic Installation
- Understanding Sequelize
- How to Guide for migrations
- Source of Truth
- Up and down migrations
- Common Sequelize snippets for operations

### Basic Installation

We're going to be starting from scratch. Install NodeJS on your computer if you haven't already. Open a blank folder and run these commands in your terminal:

```
npm install -g sequelize-cli
npm install sequelize
```

Sequelize-cli is a standalone tool that let's you execute migrations. Mi