import React from 'react';
import ReactDOM from 'react-dom';

import Article from "./Component/Article"


// random description
const LOREM_IPSUM =
  `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make a type specimen book.
  `


// our static hacker new feed
const VIEW =
  <div>
    <Article
      description={LOREM_IPSUM}
      link="https://google.com"
      title="Article 1"
    />
    <Article
      description={LOREM_IPSUM}
      link="https://google.com"
      title="Article 2"
    />
    <Article
      description={LOREM_IPSUM}
      link="https://google.com"
      title="Article 3"
    />
  </div>


ReactDOM.render(VIEW, document.getElementById('root'));
