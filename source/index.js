import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Hello Hacker News';

const element =
  <div
    style={{ fontSize: 36, color: 'green' }}
    onClick={() => window.alert(title)}
  >
    {title}
  </div>

const root = document.getElementById('root');

ReactDOM.render(element, root);
