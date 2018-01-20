# chapter-zero

When you're finished here, you'll be at the same point as the `chapter-one` branch.

## Background

We've set up some super simple config for you to get you off the ground. This will handle the bundling of your modules and CSS, and a tiny server to run during development. This is designed to be a ground-up course, so anything you need from here on out will be explained in detail.

### Files

There are two files of interest when you start. The first is `dist/index.html`. You shouldn't need to edit this, but this is the 'mount point' for our application. This is where React will come in and insert the HTML necessary to display your app. You can see in there that there is a single `DIV` with an id of 'root', and a `SCRIPT`. The script is pointed at the 'bundled' file served by the development server.

The bundle file contains all of your code, and all of your dependencies' code. It is done by `webpack`, which you can read more about [here](https://webpack.js.org).

### Commands

`yarn` is a package manager built by Facebook that helps install and manage any code dependencies for your projects. It is similar to `npm`, which comes with `node`, but has advantages such as improved install speeds and shortened commands.

You will need to have `yarn` installed. You can add this if you don't have it with `npm i -g yarn`.
Once you have `yarn`, you need to install all the existing dependencies with `yarn install`.
After that, to add dependencies, use `yarn add <dependency>`, and to start the server, use `yarn start`. You can start the server now and leave it running in the background - it will create a new bundle every time you change a file. It should also open your browser - if it doesn't, navigate to http://localhost:8082. You should see a message there that says 'Hello Hacker News'.

### Current Application

Our application source will live in `source/`. If you look in there now, there is one file called `index.js`.  This is our main file, and where we will start editing.

## Dependencies

Let's start off by adding the dependencies we need right now. To get started, at least, we need `react` and `react-dom`. Install these like this, from your terminal.

```
yarn add react react-dom
```

## React

### My First Element

We're going to replace the simple HTML we've got with a React element.

First things first - let's remove the boilerplate code we started with, and bring in our first two dependencies. Your `source/index.js` should look like this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
```

To create our first element, we're going to use `React.createElement`, which is the standard API for doing this.  `createElement` takes (at least) three parameters. The first is the type of element (which in this case is a `'div'`). Next are the 'attributes' from the HTML, which we call (and I'll refer to from now on) 'props' in React. Our initial HTML didn't have any props, so this will be `null`. Finally are any 'children' of the element. In HTML, you can add as many children as you want to a `DIV`. You can add other elements, like a `P` or a `SPAN`, or you can add text as a child, like we have here. The text is `'Hello Hacker News'`.

Putting this together, our first element is constructed like this:

```js
const element = React.createElement(
  'div', // the type of element we're creating
  null, // any props ('attributes') we're giving it
  'Hello Hacker News' // The children of this element.
);
```

Now that we have our element, we need to put it onto the screen.  To start, we need to get the `root` node from the HTML. We can do this with the standard DOM APIs.

```js
const root = document.getElementById('root');
```

And then once we have it, we can use `ReactDOM` to render it for us, using the `render` method. `render` takes two arguments. The first is the React element to render, and the second is the actual DOM node to render it to (`root` in our case).

```js
ReactDOM.render(element, root);
```

Save and refresh your page. You should see no changes. If you inspect the elements on the page, you should see that our `root` element has a single child - a `DIV` with the text 'Hello Hacker News'.

If you're lost, or you get stuck, your code should look like [this](https://github.com/TandaHQ/react-hackernews-bootcamp-one/blob/zero-my-first-element/source/index.js).

### Moving to JSX

Now that you've seen that React is just function calls, let's make it a little nicer to write. Facebook came up with an extension to JavaScript called JSX (JavaScript eXtension) to help with writing React. It provides a small amount of sugar for us to write elements more quickly.  It looks very similar to HTML, but intimidates a lot of people when they first start. Just remember, it is complete sugar for what we've already written.  Below is the *exact equivalent*, written in JSX.

```jsx
<div>Hello Hacker News</div>
```

Wait, what? It's exactly what we had before! Let's break this down one more tiny step to understand what's happening.

```jsx
<div> {/* the element 'type' (we don't need quotes around 'div' anymore) */}
  Hello Hacker News {/* the children - you can put as many as you like in here*/}
</div> {/* the closing tag */}
```

That's it. You can see exactly how it is converted from JSX to JavaScript, because we've done both. Let's update our code to reflect this new knowledge.

```
const element = <div>Hello Hacker News</div>
```

Save and refresh. You should see no changes.

If you're lost, or you get stuck, your code should look like [this](https://github.com/TandaHQ/react-hackernews-bootcamp-one/blob/zero-moving-to-jsx/source/index.js).

### Some more JSX

In JSX, to 'escape' from JSX mode, and get back to regular JavaSript, surround your content with `{<content here>}`. If you want to add a raw number as a child, you could do:

```jsx
<div>{10}</div>
```

Similarly, you can do this with a variable, too.

```jsx
const myNum = 10;
<div>{myNum}</div>;
```

**_Additional Exercise_**

To check your understanding, try and write the above using `React.createElement`.

If you want to add a number as a prop, you could do:

```jsx
<div dataTest={10}>Hello Hacker News</div>
```

For interest's sake, this is the pure JavaScript for that JSX:

```js
React.createElement(
  'div',
  { dataTest: 10 },
  'Hello Hacker News'
);
```

The props we add just become an object that is the second argument to `createElement`. Note that we use `camelCase` for *all* props in JSX, because they're easier to type in objects, and easier to access values from as well, which will be useful later.

Strings are the rare exception to this - JSX knows how to handle them *without* escaping:

```jsx
<div dataTest="Some Content">Hello Hacker News</div>
```

If you wanted to add an object as a 'prop', you can do:

```jsx
<div dataTest={{ test: true }}>Hello Hacker News</div>
```

The first set of `{}` escapes us from JSX mode. The next set creates our object.

Inside the `{}`, when we escape from JSX mode, you can put *any* valid JavaScript expression. You can put numbers, strings, objects, arrays, functions or booleans. Note, you can't put an `if`-statement (but you can use a ternary ;).

There were no code changes here - this was an info-only section which we'll use next.

### Adding some props

Now that we have a nice way to write our components, let's add some props to make it a little better (and to learn how to do it).

We have two goals for this step:

- make the text bigger and green
- make an alert pop up when you click the title

For the styles, we're going to use *inline styles* for now. We'll go through some better styling later on in the bootcamp.

Okay. We add the styles the same way we would in HTML, except that we have an object instead of a string. Additionally, the object uses `camelCase` instead of `snakeCase` for the names of the CSS properties.

```jsx
const element = 
  <div
    style={{ fontSize: 36, color: 'green' }} 
  >
    Hello Hacker News
  </div>
```

Save and reload - you should have some green text! It's not pretty, but it works.

Next, let's add some functionality to our component. When we click the component, we want the browser to `alert` us of the same message.

React comes with a bunch of built-in helpers for events. We want the `onClick` one, but there are [many, many others](https://reactjs.org/docs/events.html#supported-events).

```jsx
const element = 
  <div
    style={{ fontSize: 36, color: 'green' }}
    onClick={() => window.alert('Hello Hacker News')}
  >
    Hello Hacker News
  </div>
```

Save and reload, and click the name. You should get an alert.

## Exercise

We're better programmers than that. We're now using the same string twice - so let's refactor it into a variable.

Your challenges are:

  - Refactor 'Hello Hacker News' into a variable
  - Use that variable for all instances in the code.

If you get stuck with this section, try re-reading the [Some More JSX](#some-more-jsx) section.

If you can't get it, don't stress. Ask the people around you, ask us, or check the final solution [here](https://github.com/TandaHQ/react-hackernews-bootcamp-one/tree/chapter-one).  This is the beginning of `chapter-one`, which is where we'll pick up. Your code base should match this one (hint: you've only edited `source/index.js`).

That's the end of the chapter.

**_Additional Exercise_**

If you get done early, why not have a go at writing it using `React.createElement`.

