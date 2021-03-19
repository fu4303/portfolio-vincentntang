---
date: 2021-03-19
title: 'Conditional React Hooks'
template: post
thumbnail: '../../thumbnails/react.png'
slug: conditional-react-hooks
categories:
  - Programming
tags:
  - React
---

One way to structure API calls in React is to use hooks. This gives you a clean separation of concerns for how data is fetched and creates a reusable component you can use for your API calls. 

I wanted to implement a custom hook that calls an API but only when a user logs in. I have an `AppComponent` that has a prop called `enableReviews`. Should this value be true, it will call a custom hook that shows a movie and its reviews.

The code looks like this:

```ts
import {Movie} from "./Movie"

const AppComponent = (enableReviews) => {
  const {user} = useGetUserFlow();

  if(enableReviews){
    const {reviews} = useGetReviewsFlow(user);
    return <Movie reviews={reviews}/>
  } else {
    return <Movie/>
  }
}
```

However, I was left with this error:

```
React Hook "useGetReviewsFlow" is called conditionally. React Hooks must be called
in the exact same order in every component render. Did you accidentally
call a React Hook after an early return?
```

The reason for this error is depending on the condition, this potentially changes the order in which react-hooks are called. A hook must be called in the same order whenever a re-render happens, otherwise, there are unintentional side-effects that may occur. Therefore, **React hooks can only be called at the top level of the component**. 

Now that we know this, how do we fix this code? There are a few different ways of fixing this.

## Call and ignore

We can put the custom hooks at the top level regardless of what the prop is in this case.

```ts
import {Movie} from "./Movie"

const AppComponent = (enableReviews) => {
  const {user} = useGetUserFlow();
  const {reviews} = useGetReviewsFlow(user); // this was moved

  if(enableReviews){
    return <Movie reviews={reviews}/>
  } else {
    return <Movie/>
  }
}
```

This is simplest solution. However, this means if `enableReviews` is false, we're making essentially making an API call we're not using. If this app needs to be scaled for a lot of users, we'll be stressing the backend more than it needs to. 

So this isn't an ideal solution.

## A new component

A better solution instead is to write a separate component that is rendered only if `enableReviews` is set to true.

```ts
import {Movie} from "./Movie"

const AppComponent = (enableReviews) => {
  const {user} = useGetUserFlow();

  if(enableReviews){
    return <MovieWithReviews enableReviews={enableReviews} user={user}/>
  } else {
    return <Movie/>
  }
}

const MovieWithReviews= (enableReviews, user) => {
  const {reviews} = useGetReviewsFlow(user); // this was moved
  return <Movie reviews={reviews}
}
```

In this example, we move `useGetReviewsFlow` to a component that is only conditionally rendered if `enableReviews` is true. All the custom hooks still live at the top level of each React component, so React knows which order to re-render.