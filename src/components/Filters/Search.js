import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { TextField, RaisedButton } from 'material-ui'
import { styled } from 'react-free-style'
import { cardTitleFilterText, cardTitleFilter, colorBlue, buttonColorBlue } from '../../styles'
import ActionSearch from 'material-ui/svg-icons/action/search'

const iconStyles = {
  marginRight: 24,
}

const titleComponent = (styles) => (
  <div className={styles.cardTitleFilterText} >
    <ActionSearch className={styles.color} style={iconStyles} />Nombre del Hotel
  </div>
)
class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      txt: '',
      TextField: null
    }
  }

  handleOnClick = () => {
    this.props.searchHotel(this.state.txt)
    setTimeout(() => {
      this.setState({ txt: '' })
      this.TextField.input.value = ''
    }, 500)
  }

  render() {
    const { styles } = this.props
    return (
      <Card initiallyExpanded={true} className={styles.cardTitleFilter}>
        <CardHeader
          title={titleComponent(styles)}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true} style={{paddingTop: 'unset'}}>
          <TextField
            ref={node => this.TextField = node}
            onChange={(e) => this.setState({ txt: e.target.value })}
            hintText = "Ingrese el nombre del hotel"
          />
          <RaisedButton label="Aceptar" className={styles.buttonColorBlue} onClick={this.handleOnClick} />
      </CardText>
    </Card>
  )
  }
}

export default styled({ cardTitleFilter, cardTitleFilterText, ...colorBlue, buttonColorBlue })(Search)