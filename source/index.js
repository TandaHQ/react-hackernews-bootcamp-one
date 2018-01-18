import React from 'react';
import ReactDOM from 'react-dom';

import NewsFeed from './View/NewsFeed';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentWillMount() {
    setTimeout(() =>
      this.setState({ articles: ARTICLES })
    , 3000);
  }

  render() {
    return (
      <NewsFeed
        articles={this.state.articles}
      />
    );
  }
}


const LOREM_IPSUM =
  `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make a type specimen book.
  `

const ARTICLES = [
  {
    description: LOREM_IPSUM,
    id: 1,
    link: 'https://google.com',
    title: 'Article 1',
  },
  {
    description: LOREM_IPSUM,
    id: 2,
    link: 'https://google.com',
    title: 'Article 2',
  },
  {
    description: LOREM_IPSUM,
    id: 3,
    link: 'https://google.com',
    title: 'Article 3',
  },
];

ReactDOM.render(
  <Container
  />
, document.getElementById('root'));
