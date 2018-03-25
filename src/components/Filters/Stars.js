import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { Checkbox } from 'material-ui'
import { styled } from 'react-free-style'
import { cardTitleFilterText, colorBlue, yellowStars, cardTitleFilter } from '../../styles'
import FontIcon from 'material-ui/FontIcon'

const iconStyles = {
  marginRight: 24,
  maxWidth: 24
}
const NUMBER_CHECKS = 5

/* 
Función que sirve para generar el array que posteriormente servirá para
llenar la cantidad de elementos necesarios en el 
sistema de filtro por estrellas
*/
const arrayFilled = (r) => (new Array(r)).fill(1)
  .map((e, i) => i + 1).sort((a, b) => b > a)

class Search extends React.Component {
  constructor(props) {
    super(props)
    const state = Object.assign({ stars: [], all: false }, ...arrayFilled(NUMBER_CHECKS).map(e => ({ [e]: false })))
    this.state = state
  }
  updateCheck = (n, evt) => {
    /* 
    Si es checkeado para ver todos los hoteles
    se setean todas las demás palomillas a false
    */
    if (n === 'all' && !this.state[n]) {
      const state = Object.assign({}, ...arrayFilled(NUMBER_CHECKS).map(e => ({ [`${e}`]: false })))
      this.setState({ ...state, stars: [] })
      this.props.getAllStars()
    } else if (n !== 'all') {
      /* 
      Si es checkeado un check diferente al de todos
      se registra la cantidad de estrellas y se hace la petición
      al servidor
      */
      this.setState({ 'all': false })
      let stars = []
      if (this.state.stars.includes(n)) {
        stars = [...this.state.stars].filter((star) => star !== n)
        this.setState({ stars })
      } else {
        stars = this.state.stars.concat(n)
        this.setState({ stars })
      }
      this.props.starsHotel(stars)
    }
    this.setState({ [n]: !this.state[n] })
  }
  /* 
  Se generan cada estrella dependiendo de cada check
  */
  generateStars = (r) => arrayFilled(r)
    .map((e, i) =>
        <FontIcon
          key={i}
          className={[this.props.styles.yellowStars, 'material-icons'].join(' ')}
        >
          star_rate
      </FontIcon>
    )
  /* 
  Se generan los elementos checks
  */
  generateElements = () => arrayFilled(NUMBER_CHECKS)
    .map((n) =>
      <Checkbox
        key={n}
        label={this.generateStars(n)}
        checked={this.state[`${n}`]}
        onCheck={(e) => this.updateCheck(n, e)}
      />
  )
  
  render() {
    const { styles } = this.props
    return (
      <Card initiallyExpanded={true} className={styles.cardTitleFilter} style={{ marginTop: '10px' }}>
        <CardHeader
          title={
            <div className={styles.cardTitleFilterText} >
              <FontIcon className={[styles.color, 'material-icons'].join(' ')} style={iconStyles}>star_rate</FontIcon>
              Estrellas
            </div>
          }
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true} style={{ paddingTop: 'unset' }}>
          <Checkbox
            label="Todas las estrellas"
            checked={this.state.all}
            onCheck={(e) => this.updateCheck('all', e)}
            style={styles.checkbox}
          />
          {this.generateElements()}
        </CardText>
      </Card>
    )
  }
}

export default styled({ cardTitleFilter, cardTitleFilterText, yellowStars, ...colorBlue })(Search)