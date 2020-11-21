---
date: 2019-12-03
title: 'Four Ways to Ensure Good Data In Your Database'
template: post
thumbnail: '../../thumbnails/sql.png'
slug: four-ways-to-ensure-good-data-in-your-database
categories:
  - Backend
tags:
  - Postgres
  - SQL
  - SQLite
---

Databases are used to store data, one of these is called a relational database. Data can get messy in the application fairly fast, for a number of reasons. Sometimes the backend code doesn't validate the information coming from the frontend. For instance, you might have a user inputting bad data on a form. This could be something like an email field requiring an email address. Instead of adding an email, something like `testing@gmail.com`, they may have misspelled it to `testing.com`. 

Ensuring good data integrity in a database means you can reliably build your application on solid foundations. This reduces the number of unknowns and builds safety checks to prevent your application from throwing bugs

## Who this article is for

If you're an experience database developer, this information is just a refresher. If you've recently started getting your feet wet in backend and database development, this post is for you. I don't cover how databases work here and assume you have worked with them before

## 1. Specifying the correct type of data for each column

Depending on what database engine you use, there are a list of different data types available to it. For instance, if you use SQLite, there's 6 basic types:

- Null
- Numeric
- Integer
- Real
- Text
- Blob

Let's say your building a budget calculator. You might store values in your database like this:

- 55.00
- 32.55

The `$` doesn't need to be defined here though, if you know the values being stored in in US dollars. You could always store this information as a text field, but this means your database could store values like `$55.00`. While this might look correct, programming languages can't calculate math with the `$` upfront unless it's removed. 

This also means that there might be potential other input values in these fields. These include `asdfqweryyy`. In this example, you could use a type of `real`, so nothing but floating point values are stored.

One of the rules of good database design is to assume the worst case scenario, in that there will always be bad data coming in. You want these checks to ideally live as close to the datasource as possible, in this case the database

## 2. Building foreign key relationships

Here's an example. In most applications, there is generally a `users` and a `role` table. For instance, someone who logs into a website might have admin privilages, in this case they are of role `admin`. So they have the ability to delete / update user profiles that a nonadmin should not have.

Here's an example of how that `admin` user gets stored in the database. 

| Users Columns | Example Values                       |
|:-------------:|--------------------------------------|
| users_id (PK) | dc1b9a56-350e-4d0d-af6a-9079d0323c48 |
| roles_id (FK) | 8dcb786e-6f9c-4bf2-82e7-c5a17abe4a55 |
| user_name     | bobdoe                               |
| email_address | bobdoe@gmail.com                     |


| Roles Columns | Example Values                       |
|:-------------:|--------------------------------------|
| roles_id (PK) | 8dcb786e-6f9c-4bf2-82e7-c5a17abe4a55 |
| role_name     | admin                                |

Our user `bobdoe` is an admin here, via the `roles_id`, as this is how the two tables are connected to each other. `Bobdoe` has a `roles_id` of `8dcb786e-6f9c-4bf2-82e7-c5a17abe4a55` that also exists in the roles table. 

Values like these `8dcb786e-6f9c-4bf2-82e7-c5a17abe4a55` are non-incrementing [UUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier), which are randomly generated unique 32 alphanumeric characters. The alternative is auto-numbered integers.

## 3. Building check constraints against column fields

Most webapplications will have forms to gather information from the enduser. Sometimes these forms might require that the user enter their gender. You could build a `gender_table` connected to the `user_table` that has values like `male, female, etc`. If your application is not a social analytics application, chances are the `gender_table` is connected to anything but the `users_table`. 

It might make more sense to build a constraint instead, against a new column in the `users_table`. This is especially true if you know these values are finite and won't change much overtime

These constraints occur at the database level. In this case, you'll still have a `users_table`, but add a new column:


| Users Columns | Example values                       |
|:-------------:|--------------------------------------|
| users_id      | dc1b9a56-350e-4d0d-af6a-9079d0323c48 |
| roles_id      | 8dcb786e-6f9c-4bf2-82e7-c5a17abe4a55 |
| user_name     | bobdoe                               |
| email_address | bobdoe@gmail.com                     |
| gender        | male                                 |

Under the gender column itself, you can add `checks` against this column only. More information found on it over here [https://www.w3resource.com/PostgreSQL/check.php](https://www.w3resource.com/PostgreSQL/check.ph)

## 4. Building typechecks in your code

While the above 3 cases are handled at the database level, you could also enforce type checks in your codebase. Adding extra layers of redundancy makes your application more robust, but comes at a cost in requiring more infrastructure / time to build out apps.

If you use typescript in the backend, you could specify the variable you are using so it does not change:

```ts
let user_name: string = 'bobdoe';
let email: string = 'bobdoe@gmail.com';
```

You could also enforce these checks on your business logic / controllers too. 

```ts
function test(a: string, b: number) {
    console.log(a);
    console.log(b)
}
```

`a` will always be a string in this case, `b` will always be a number. If it does not you'll get an error

Lastly, if you use [GraphQL](https://graphql.org/learn/schema/) there's also type schemas as well

## Summary

These are the more common ways of preventing bad data from getting into your database. This lets you build a solid foundation to scale up your application without worrying about unknowns like what type of data is actually in your database. Other helpful things you could do is create logging tables of what happens in your database overtime (future post), and backups of your database.