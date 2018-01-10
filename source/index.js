import React from 'react';
import ReactDOM from 'react-dom';


/**
 * our first component, accepts 2 props:
 * - title (of article)
 * - link (to article)
 * - description (of article)
 */
function Article(props) {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <a href={props.link}>{props.link}</a>
    </article>
  )
}


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
  <Article
    description={LOREM_IPSUM}
    link="google.com/foobar"
    title="Article 1"
  />


ReactDOM.render(VIEW, document.getElementById('root'));
