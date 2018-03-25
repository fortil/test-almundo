import React from 'react'
import { Filters } from '../containers/'
import { connect } from 'react-redux'
import { Hotels } from '../containers'
import { AppBar } from 'material-ui'
import { appbar, bodyStyle, imgLogo } from '../styles'
import { styled } from 'react-free-style'
import logoAlmundo from '../assets/logo-almundo.svg'
import { getHotels } from '../lib/http'

/* 
Aplicación que contiene la estructura inicial de la aplicación
*/
class App extends React.Component {
  componentWillMount = () => {
    /* 
    Se llama al dispacher que pide la data al servidor
    */
    this.props.getHotels()
  }
  
  render() {
    const { appbar, bodyStyle, imgLogo } = this.props.styles
    return (
      <div>
        <AppBar className={appbar} iconElementLeft={<i></i>} titleStyle={{display: 'none'}}>
          <img src={logoAlmundo} alt="Almundo" className={imgLogo} />
        </AppBar>  
        <div className={bodyStyle}>
          <Filters />  
          <Hotels />
        </div>
      </div>
    )
  }
}

/* 
Se mapea para tener el dispacher que llama a la función de los hoteles
*/
const mapDispatchToPropsGetHotels = dispatch => ({
  getHotels: () => dispatch(getHotels())
})

/* 
Se connecta al redux y al styled para que por props lleguen los
estilos y las funciones indicadas
*/
export default connect(
  null,
  mapDispatchToPropsGetHotels
)(styled({ appbar, bodyStyle, imgLogo })(App))