import React from 'react';

import styles from './styles.css';


/**
 * our first component, accepts 2 props:
 * - title (of article)
 * - link (to article)
 * - description (of article)
 */
export default function Article(props) {
  return (
    <article className={styles.article}>
      <h3 className={styles.title}>
        {props.title}
      </h3>
      <p className={styles.desc}>
        {props.description}
        <a
          className={styles.link}
          href={props.link}
        >
          {props.link}
        </a>
      </p>
    </article>
  )
}
