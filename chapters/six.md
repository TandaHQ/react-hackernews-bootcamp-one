# chapter-six

We now have an app that loads and renders hackernews article details, that even shows a loading state, while requesting data woo hoo! but what if we wanted to build more features into the app, theres most likely going to be more api integration, and places we may need to show things load. like comments on articles for example. How can we reuse the loading pattern without duplicating code? how can we make it so if in future we want to change the loading view we can change it everywhere? We can create Higher Order Components to solve this problem.

# Higher Order Components (HOC)
To construct a higher order components the general pattern is:

```jsx
// this function creates a HOC that injects one prop call `text` into the original version of the component
function WithText(View) {
  return class extends React.Component {
    render() {
      return (
        // {...this.props} - this takes all the props defined on the HOC and
        //                   passes them to the original component.
        <View
          {...this.props}
          text="Hello World"
        />
      )
    }
  }
}

//------------------- usage --------------------//

// regular message component
function Message() {
  return (
    <div>{this.props.text}</div>
  )
}

// a message component that will allways show 'Hello World'
const MessageWithText = WithText(Message);

ReactDom.render(<MessageWithText />, document.getElementById('root')) // will always render hello world

```

clearly this is a very basic usage. but hopefully illustrates the pattern. A more relevent example:

```jsx
import Loading from './Components/Loading';

export default function Loadable(View) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { loaded: false }
    }

    componentWillMount() {
      this.props.onMount().then(() =>
        this.setState({ loaded: true })
      )
    }

    render() {
      return this.state.loaded ? (
        <View {...this.props} />
      ) : (
        <Loading />
      )
    }
  }
}

//------------------- usage --------------------//

// regular message component
function Message() {
  return (
    <div>{this.props.text}</div>
  )
}

// a message component that will allways show 'Hello World'
const LoadableMessage = Loadable(Message);

// will render a loading screen until the promise resolves
ReactDom.render(
  <LoadableMessage
    onMount={aFunctionThatReturnsAPromise}
  />,
  document.getElementById('root')
)

```

## Excercise

Lets create a Loadable version of our news feed, and update our container to use the new `Loadable(NewsFeed)`.
