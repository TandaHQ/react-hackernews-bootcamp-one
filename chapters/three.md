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

# A List View
Commonly in a user interface we have to represent an array of things of which we do not know the length of until compute time. For example, if we were trying to display all the articles from hacker news for a specific week, the array of articles may vary in length. How do we do this then? The answer lies in Array#map.

### Mapping
If we have an array of values such as `[1, 2, 3]` and wanted to double them, we can map them like so:

```js
const numbers = [1, 2, 3]

const doubles = numbers.map(a => a * 2) // [2, 4, 6]
```

if we wanted to change there type we can still use map:

```js
const numbers = [1, 2, 3]

const strings = numbers.map(a => a.toString()) // ['1', '2', '3']
```

finally, if we wanted to make them into components:

```js
const numbers = [1, 2, 3]

const components = numbers.map(a => (
  <span key={a}>{a}</span>
)) // [<span>1</span>, <span>2</span>, <span>3</span>]
```

Yup thats right we can map to react elements just like they were any other value!

### The catch

You will notice in the example mapping numbers to react components, I have assigned the value to a property on the span called `key`. why is this?

It is because when our list gets rendered time and time again, react needs to be able to tell which component are the same as last render. The key you provide should be unique to the value the component is representing. To use the hackernews feed as an example, if the component you are mapping to, represents one of the articles from the api, the `id` of the article would be a good key as it is unique to the article.


## Excercise

Lets change the definition of our `NewsFeed` component to take an array of hackernews articles, and map them to `Article` components, then render them inside a `div`.

```jsx
// Usage should be like so:
//
//    <NewsFeed
//      articles={ARTICLES}
//    />
//

```

**_Additional Exercise_**

Lets refactor our NewsFeed component into its own file. This file should be `source/View/NewsFeed/index.jsx`
