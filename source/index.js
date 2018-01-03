import React from 'react';
import ReactDOM from 'react-dom';

const element = React.createElement(
  'div',
  null,
  'Hello Hacker News',
);

const root = document.getElementById('root');

ReactDOM.render(element, root);
