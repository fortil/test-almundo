import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
/* 
Después de haber visitado la página por primera vez se guardan los datos en el localStorage
Por lo que al iniciar se pregunta si ya existe la data y se manda como stado inicial
*/
const persistedState = localStorage.getItem('AlMundoAPP') ? JSON.parse(localStorage.getItem('AlMundoAPP')) : {}
/* 
Los middlewares para redux
*/
const middlewares = [thunk]

if (process.env.NODE_ENV !== 'production') {
  /* 
  Si no estamos en producción podemos ver los logguers de
  las acciones y dispachers
  */
  const createLogger = require('redux-logger').createLogger
  const logger = createLogger({ collapsed: true })
  middlewares.push(logger)
}

/* 
Se crea el warpper de redux
*/
const createStoreWrapper = compose(
  applyMiddleware(...middlewares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
/* 
Se crea el store
*/
// const filterInitial = { filter: 'ALL_STARS', search: '', stars: [] }
const store = createStoreWrapper(rootReducer, persistedState)
/* 
Cada vez que hay un cambio en el store se guardan en el localstorage
*/
store.subscribe(() => {
  localStorage.setItem('AlMundoAPP', JSON.stringify(store.getState()))
})


export default store
