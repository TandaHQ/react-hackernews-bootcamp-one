import React from 'react';
import ReactDOM from 'react-dom';
import getArticles from 'hacker-news-top-ten';

import NewsFeed from './View/NewsFeed';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentWillMount() {
    getArticles().then(articles =>
      this.setState({ articles })
    , 3000);
  }

  render() {
    return this.state.articles.length > 0 ? (
      <NewsFeed
        articles={this.state.articles}
      />
    ) : (
      <div>Loading...</div>
    );
  }

}

ReactDOM.render(
  <Container
  />
, document.getElementById('root'));
