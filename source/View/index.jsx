import styles from "./styles.css"


// we will turn this into the root of our react view
export default function DefinitelyNotAReactView() {
  // try changing this to test hot reloading
  document.body.innerHTML =
    `
      <div class=${styles.helloWorld}>
        Hello Hacker News
      </div>
    `
}
