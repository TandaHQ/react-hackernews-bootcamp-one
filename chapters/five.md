# chapter-five

To improve on our container component from last chapter, we will tackle to aspects, integrating with the api, and provide a loading view.

# Integrating with the api

To integrate with the api, we will be using a package named `hacker-news-top-ten`. The README.md of this module can be found [here](https://yarnpkg.com/en/package/hacker-news-top-ten). Lets add the dependency using `yarn add hacker-news-top-ten`. We can now use this in our container's `componentWillMount` method and add the results to state with `setState`.

Lets refactor our container to make the api call.

```jsx
// source/index.jsx
import React from 'react';
import getArticles from 'hacker-news-top-ten';

import NewsFeed from './View/NewsFeed';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentWillMount() {
    // since this isnt really react specific we will
    // give you this one 😜
    getArticles().then(articles => {
      this.setState({ articles })
    });
  }

  render() {
    return (
      <NewsFeed
        articles={this.state.articles}
      />
    )
  }
}

ReactDom.render(<Container />, document.getElementById('root'));
```

There we have it our app now renders a list of articles from the api!

# Providing a loading view

currently while our data is loading we unfortunately dont see anything, this is not a good time. We can improve on this pretty easily in react though. We can just create a component that conditionally renders one of two components depending on some state or property. here is an example of this pattern.

```jsx
import React from 'react';

class RendersOneOfTwo extends React.Component {
  constructor() {
    super(props);
    this.state = { renderOne: true }
  }

  render() {
    return (
      <div>
        {this.state.renderOne ? (
          <div>Hello World One</div>
        ) : (
          <div>Hello World Two</div>
        )}
      </div>
    )
  }
}
```

First thing to note, by using `{}` inside the JSX we are able to write javascript inline. We then go ahead to return one of two react elements to the JSX, depending on whether `this.state.renderOne` is true or not.

For our hackernews app we can use this pattern in our container to render a loading view while we wait for data from the api.

## Excercise

We are going to add a loading screen to our container. To do this we will need to:

- add an intial value to `this.state.loaded` equal to false.
- when our articles load we are going to set this value to true along with saving the articles to state.
- we are going to conditionally render `<div>Loading...</div>` while `this.state.loaded` is false.

**_Additional Excercise_**

Refactor the loading view into its own component in `source/Component/Loading/index.jsx`, and make it look 💸 💸 💸 .
