import React from 'react'
import { styled } from 'react-free-style'
import { Card, CardText } from 'material-ui/Card'
import FontIcon from 'material-ui/FontIcon'
import { hotelsElements, yellowStars } from '../styles'
import icons from '../assets/icons/'
import SvgIcon from 'material-ui/SvgIcon'
import RaisedButton from 'material-ui/RaisedButton'

const propsToIcons = {
  fill: '#444',
  style: { width: 24, height: 24, marginRight: 10, },
  viewBox: '0 0 120 118.191'
}

const Icon = (name) => (
  <SvgIcon key={name} {...propsToIcons} dangerouslySetInnerHTML={{ __html: icons(name) }} >
  </SvgIcon>
)

const generateStars = (styles, e) => (
  (new Array(e)).fill(1)
    .map((e, i) =>
      <FontIcon
        key={i}
        className={[styles.yellowStars, 'material-icons'].join(' ')}
      >
        star_rate
      </FontIcon>
    )
)

class HoltesList extends React.Component {
  render() {
    const { styles, hotels } = this.props

    return (
      <div className={styles.containerHotels}>
        {hotels.map((hotel) => (
          <Card key={hotel.id} className={styles.gridList}>
            <CardText className={styles.hotelContainer}>
              <img src={hotel.image} alt={hotel.name} className={styles.image} />
              <div className={styles.containerData}>
                <h2 className={[styles.titleHotel, styles.color].join(' ')}>{hotel.name}</h2>
                <div className={styles.titleHotel}>{generateStars(styles, hotel.stars)}</div>
                <div className={styles.amenityIcon}>
                  {hotel.amenities.map((e) => Icon(e))}
                </div>
              </div>
              <div className={styles.pricePerNight}>
                <hr className={styles.dashUnderLine} />
                <div className={styles.containerPrice}>
                  <span>Precio por noche por habitación</span>
                  <div className={styles.prices}><h3>ARS</h3><h2>{hotel.price}</h2></div>
                  <RaisedButton label="Ver hotel" className={styles.button} />
                </div>
              </div>
            </CardText>
          </Card>
        ))}
      </div>
    )
  }
}

export default styled({
  ...hotelsElements,
  yellowStars
})(HoltesList)