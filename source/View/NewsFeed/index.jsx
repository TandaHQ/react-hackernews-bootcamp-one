import React from 'react';
import Article from '../../Component/Article';
import Loadable from '../../Util/Loadable';

export function NewsFeed(props) {
  const articles = props.articles.map(article =>
    <Article
      description={article.by}
      key={article.id}
      link={article.url}
      title={article.title}
    />
  )

  return (
    <div>{articles}</div>
  )
}

export default Loadable(NewsFeed)

