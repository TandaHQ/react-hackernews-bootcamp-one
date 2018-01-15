import React from 'react';
import ReactDOM from 'react-dom';

import Article from "./Component/Article"


function NewsFeed(props) {
  return (
    <div>
      <Article
        description={props.article1.description}
        link={props.article1.link}
        title={props.article1.title}
      />
      <Article
        description={props.article2.description}
        link={props.article2.link}
        title={props.article2.title}
      />
      <Article
        description={props.article3.description}
        link={props.article3.link}
        title={props.article3.title}
      />
    </div>
  )
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
]

const VIEW =
  <NewsFeed
    article1={ARTICLES[0]}
    article2={ARTICLES[1]}
    article3={ARTICLES[2]}
  />


ReactDOM.render(VIEW, document.getElementById('root'));
