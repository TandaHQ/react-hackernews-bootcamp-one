import View from "./View"


/**
 * @param {*} View of the app
 */
function main(View) {
  View()
}

main(View)


// THIS IS DEVELOPMENT CODE IT IS USED TO
// MAKE THE APP UPDATE WHEN WE UPDATE
// THE SOURCE CODE
if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./View', () => {
    main(require('./View').default);
  })
}
