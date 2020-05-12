---
date: 2020-05-12
title: 'React useEffect '
template: post
thumbnail: '../../thumbnails/react.png'
slug: react-use-effect-explained
categories:
  - Javascript
tags:
  - React
  - Hooks
  - Components
---

Here's a quick explaination on React's useEffect! My assumption is you are familiar with how class components
work in React, so I'll explain what the hooks equivalents are 🚀

Let's get straight to it

## useEffect vs componentDidMount

In React, the two most common lifecycle methods used are `componentDidMount` and `componentDidUpdate`. The latter is used mostly when your prop changes from the parent, and the child has to update in response.
The former is mostly for making external HTTP requests to a server to fetch data. For instance, you can fetch data from jsonplaceholder (a free API tool) like so:

```js
import React from 'React';

class App extends React {
  componentDidMount{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) 
      .then(json => console.log(json))
    }
  }
}
```

This grabs data once the component mounts, and log it to the console (suprise!). So, what's the equivalent in hooks?

Let's step back for a moment, before the world of hooks came about. We had (and still have) another way of writing components in React. "functional" or stateless components like these:

```js
const Footer = () => {
  return (
    <div>
     <h1>Dude, I'm a footer<h1>
    </div>
  )
}
export default Footer
```

You could pass props, and in these props callback functions to modify the parent's state. 

```js
const Footer = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button onClick={props.callback}>Callback Function</button>
    </div>
  )
}
export default Footer
```

When you write in React Hooks, you are writing components in a functional-esque style like the above, but combining it with the power of class-like components via "hooks".

Let's go back to our original example with `componentDidMount`. Here's how you'd write this with hooks

```js
import {useEffect} from 'React';

const App = (props) => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) 
      .then(json => console.log(json))
    }
  },[]);
}
```

This runs one time. We specify at the end `[]` to indicate it runs only one time

## useEffect vs ComponentDidUpdate

The last argument indicated above `[]` is actually what controls how often the `useEffect` code gets runned. So how does this translate to `componentDidUpdate`?

One of the common use cases of `componentDidUpdate` is doing a side-effect from a changed prop from the parent component.

Here's an example:

```js
import react from "React";

class App extends React {
 componentDidUpdate(previousProps){
  if(previousProps.visible !== this.props.visible) {
    // execute changes
  } 
}
```

What we're doing here is checking if our current incoming `this.props` has changed from the `previousProps`. If `prop.visible` did change,
go execute code changes.

What's the equivalent of this in hooks?

```js
import {useEffect} from "React";

const App = (props) => {
 useEffect(()=> {
  // execute changes
 }, [props.visible]);
}
```

`[props.visible]` acts as a watcher of sorts, to specify when `useEffect` should run. In this case, only when `props.visible` has been modified

## useEffect vs componentDidMount/componentDidUpdate

Just as a last ending note, if you don't specify anything in the last argument in `useEffect`

```js
import {useEffect} from "React";

const App = (props) => {
 useEffect(()=> {
   // this is basically componentDidMount + componentDidUpdate combined
 });
}
```

you've essentially combined `componentDidMount` and `componentDidUpdate` all in one.
