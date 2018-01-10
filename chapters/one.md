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

## Property driven components

Apart from the ability to compose, components also have an interface to make them behave differently depending on attributes we assign them. These attributes are defined just like html attributes are (reminder attributes are _camelCase_ in react)

```jsx
// html attributes
<input onclick={myFunc} />

// jsx properties
<input onClick={myFunc} />
```

If we wanted our `Element` to use properties defined on it we need to update the definition. The properties that get defined on the component are all passed to the first argument of our component as an object. We can then use them in the component by setting properties on its internal components or as text nodes. Heres an example:

```jsx
// as you can see the component is accessing a property called message
// and displaying it as a text node inside a div.
//
// note: the some of the function definition has been removed for clarity.
//
function Element(props) {
  return (
    <div>
      {props.message}
    </div>
  )
}

// We can now define message and the component
// will use it.
const element =
  <Element
    message="Hello Hacker News"
  />

// Another example
const element =
  <div>
    <Element
      message="Article 1"
    />
    <Element
      message="Article 2"
    />
    <Element
      message="Article 3"
    />
  </div>
```

## Exercise

Try making a component that:
- is called `Article`
- accepts three props: title, description, and link.
- returns an element displaying the title, description and link.

Then try using it! Dont worry about making it 💅 (pretty) we will be looking at this next.


**_Additional Exercise_**

- Use our new `Article` component to make a list of fake news articles.
- Make the link in the `Article` work. (hint: if you know how to do this in HTML, then you already know how to do this in React)


**_Extra Additional Exercise_**

The component type we have used at this stage is known as a stateless component. Try defining a Stateful Component using an es6 class. You can look at the api [here](https://reactjs.org/docs/components-and-props.html). These allow for a whole range of more complex features.
