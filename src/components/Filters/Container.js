import React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import { styled } from 'react-free-style'
import { cardFilter, cardFilterContent, colorBlue } from '../../styles'
import Search from './Search'
import Stars from './Stars'
import detectedMobile from '../../lib/detectmobile'

class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isMobile: detectedMobile() || window.innerWidth < 500 }
  }
  updateDimensions = () => {
    const isMobile = detectedMobile() || window.innerWidth < 500
    this.setState({ isMobile })
  }
  componentDidMount = () => {
    window.addEventListener('resize', this.updateDimensions)
  }
  componentWillMount = () => {
    window.removeEventListener('resize', this.updateDimensions) 
  }
  
  render() {
    const { styles, searchHotel, starsHotel, getAllStars, filters } = this.props
    return (
      <Card className={styles.cardFilter} initiallyExpanded={!this.state.isMobile}>
        <CardHeader
          title="Filtrar"
          actAsExpander={true}
          iconStyle={this.state.isMobile ? ({ color: '#157ab1'}) : ({})}
          showExpandableButton={this.state.isMobile}
          className={this.state.isMobile ? styles.color : ''}
        />
        <CardText expandable={true} className={styles.cardFilterContent}>
          <Search searchHotel={searchHotel} filters={filters} />
          <Stars starsHotel={starsHotel} getAllStars={getAllStars} />
        </CardText>
      </Card>
    )
  }
  
}

export default styled({ cardFilter, cardFilterContent, ...colorBlue })(Filter)