# chapter-one

This chapter will cover one of the fundamental concepts of react's utility. We will be learning how to contstruct the basic building blocks of a react user interface. These building blocks are known as `Components` and essentially describe the visual representation of a user interface.

## The simplest of component types

Building on chapter zero, we got to play with an element that looked like this:

```jsx
const element =
  <div
    style={{ fontSize: 36, color: 'green' }}
    onClick={() => window.alert('Hello Hacker News')}
  >
    Hello Hacker News
  </div>
```

If we were to make this into a reusable component, all we need to do is make this into a function that starts with a capital and returns our react element.

note: in jsx, components that start with a lower letter have their name converted into a string (when compiled), thus it is important that your component starts with a capital to retain reference.

```jsx
function Element() {
  return (
    <div
      style={{ fontSize: 36, color: 'green' }}
      onClick={() => window.alert('Hello Hacker News')}
    >
      Hello Hacker News
    </div>
  )
}
```

usage is as follows

```jsx
// we can use it on its own
const element = <Element />

// or we can use three of them
const threeElements =
  <div>
    <Element />
    <Element />
    <Element />
  </div>
```

as you can see this gives us the ability to reuse a specific visual arrangement. In the current example we have used the built in components that create all the current html element types. But this is not a limitation of components. They can be a composition of builtins __OR__ other react components.

Using this concept (along with some other nifty tricks) throughout the bootcamp we will be working towards building one large component composing our entire user interface.

![mind blown](http://www.reactiongifs.com/wp-content/uploads/2013/10/tim-and-eric-mind-blown.gif)

**_Additional Exercise_**

How about we try making the threeElements into its own component?
