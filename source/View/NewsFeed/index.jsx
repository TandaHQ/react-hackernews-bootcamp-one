import React from 'react';
import Article from '../../Component/Article';

export default function NewsFeed(props) {
  const articles = props.articles.map(article =>
    <Article
      description={article.description}
      key={article.id}
      link={article.link}
      title={article.title}
    />
  )

  return (
    <div>{articles}</div>
  )
}
