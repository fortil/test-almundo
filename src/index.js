import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import darkBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
/* 
Aplicación inicial, se inicia lo necesiario para la aplicación inicial
como el Provider de redux y los temas de material-ui
*/
render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()