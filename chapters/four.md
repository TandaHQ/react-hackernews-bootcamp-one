# chapter-four

Now that we have got our main view and we can pass it a list of articles, we need to build some business logic to retrieve our articles. To do this we use a container component. The reason for this is, it is a good practice to keep your representation logic separate from your business logic.

# Containers & Class Components

Before we try defining our container, lets look at another way to define a react component. So far we have been defining our components as simple functions. There are actually a few different methods for defining them. Another way is by creating a class that extends `React.Component`. For our hackernews app there are three methods of `React.Component` we will need to make use of in our container.


### React.Component#render()

When extending `React.Component` the only required method to define is _render_. This should return
a react element.

```jsx
import React from 'react';

//
// Usage:
//   <Message
//      text="Hello World!"
//   />
//
class Message extends React.Component {
  render() {
    // notice that props isnt an argument to render. but it
    // will exist on the instance's `this` reference
    return (
      <div>{this.props.text}</div>
    );
  }
}


```
### React.Component#componentWillMount()

While the `render` is the only method necessary to define, React.Component has some other life cycle methods we can defined. an example is there is a method called componentWillMount, which is called when the component is about to be added to the screen. To use the hackernews app as an example, we can use this to fetch new articles when a component is added to the screen.

```jsx
import React from 'react';


class Message extends React.Component {

  // will execute when first added to screen
  componentWillMount() {
    console.log('hello world!');
  }

  render() {
    return (
      <div>{this.props.text}</div>
    );
  }
}

```

### React.Component#setState()

setState is a very useful tool. when called setState will take the current value of `this.state` (which will be the data store for our view), and merge it with the object you pass it, then will also render the component again with the new values.

```jsx
import React from 'react';


class Message extends React.Component {

  // lets set the initial value of `this.state`
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  // sets `this.state.text` to Hello World after 10 seconds.
  componentWillMount() {
    setTimeout(() =>
      this.setState({ text: "Hello World!" })
    , 10000);
  }

  // we are using state here to set `text`!!
  render() {
    return (
      <div>{this.state.text}</div>
    );
  }
}

```

The combination of these methods will be the basis for our container.

## Exercise

The last example of message is largely similar to what the container for
our hackernews app should look like. We want to create a container that will:

- in `source/index.jsx` create our container class extending `React.Component`.
- it should have an initial state of `{ articles: [] }`
- when the component mounts, it should fetch articles from hackernews.
- finally it will render our `NewsFeed` view with the articles currently
  in the containers state.

to make this easier lets not worry about fetching our articles from the api just yet. Lets
just use setTimeout and the mocked articles we have been using from the previous chapters.
