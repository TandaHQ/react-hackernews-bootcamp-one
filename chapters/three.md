# chapter-three

So far we have learned JSX, how to create a component, how to write modular components with modular styles.
Now we are going to put our first view together. While a component should be versatile in usage,
a view is a specific arangement of components for a user interface.

# A simple view

Guess how we define a view in react? its really just a component! we just acknowledge them differently
as they serve a different purpose. To use the hackernews app as an example,
our news feed is a view.


       Article (Component)           |         News Feed (View)
                                     |
                                     |         -----------------
                                     |         |               |
       ---------------------         |         |               |
       |                   |         |         -----------------
       |                   |         |         |               |
       |                   |         |         |               |
       |                   |         |         -----------------
       ---------------------         |         |               |
                                     |         |               |
                                     |         -----------------
                                     |

## Excercise

In our source/index.js, lets try make a `NewsFeed` view which takes the data of three articles, and renders three `Article` components, and then lets render it. Use the data in the snippet below.

```js
const LOREM_IPSUM =
  `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the
  1500s, when an unknown printer took a galley of type and scrambled it to
  make a type specimen book.
  `

// our fake articles from hackernews
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

// lets pass the values in `ARTICLES` to our `NewsFeed` like so:
//
// eg.
//   <NewsFeed
//     article1={ARTICLES[0]}
//     article2={ARTICLES[1]}
//     article3={ARTICLES[2]}
//   />
//
```

