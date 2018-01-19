import React from 'react';
import ReactDOM from 'react-dom';
import getArticles from 'hacker-news-top-ten';

import NewsFeed from './View/NewsFeed';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.loadArticles = this.loadArticles.bind(this);
    this.state = { articles: [] };
  }

  loadArticles() {
    return getArticles().then(articles =>
      this.setState({ articles })
    );
  }

  render() {
    return (
      <NewsFeed
        articles={this.state.articles}
        onMount={this.loadArticles}
      />
    );
  }

}

ReactDOM.render(
  <Container
  />
, document.getElementById('root'));
