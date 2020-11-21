---
date: 2020-05-12
title: 'Demystifying React useState'
template: post
thumbnail: '../../thumbnails/react.png'
slug: react-use-state-explained
categories:
  - Javascript
tags:
  - React
  - Hooks
  - Components
---

Here's a quick explaination on React's useState! My assumption is you are familiar with how class components
work in React, so I'll explain what the hooks equivalents are 🚀

Let's get straight to it

## useState vs setState

In React Class Components, there is this concept of two types of components. One is a stateful component, and another is a stateless
component. The general principle is you have state in components where it makes sense.

For instance, if you have a `<Footer>` component, it doesn't really need to hold any variables of interest. But, if you're building a task management
tool like trello, you'll want to store something for the `tasks`, `users`, etc.

Let's jump into code 😃

Here's a simplified example

```js
import react from "react";

class TrelloBoard extends React {
  state = {
    boardTitle: "Hello Board!";
  }
}
```

> Note - you do not need constructor functions in React, since babel transpiles it for you behind the scenes

In our state, we have `boardTitle` which is in the form of a string

Let's say I modify the task board's title. It calls a function of `modifyBoardTitle`

```js
import react from "react";

class TrelloBoard extends React {

  // state is above
  modifyBoardTitle(newTitle) ({
    this.setState({
      boardTitle: newTitle
    })
  }
  
  render(){
    return (
      <button onClick={() => this.modifyBoardTitle("BrownFox")}>Click me!</button>
    )
  }
} 
```

When we click this button, it converts the `boardTitle` variable to "BrownFox". 

Okay enough class stuff, let's go to hooks! Here's the equivalent using `useState`

```js
import {useState} from "react";

const TrelloBoard = () => {
  const [boardTitle, setBoardTitle] = useState('');
  
  render (
    <button onClick={() => setBoardTitle("BrownFox")}>Click me!</button>
   )
}
```

The equivalent in hooks is much simpler, as it's just a getter and setter with no side-effects. Let's see how this part works:

```
const [boardTitle, setBoardTitle] = useState('');
```

It works as follows:

1. The first argument is the name of the variable, `boardTitle`
2. The second argument is the name of the function that will modify `boardTitle`, in this case - `setBoardTitle`
3. `useState('')` -> this sets an initial stateValue of `''`

We abstracted away the need for a function (in this case, `modifyBoardTitle`).
This makes it easier to maintain in the long run 😄

I made another article on `useEffect` as well that you may find [helpful](./react-use-effect-explained/)
