import { connect } from 'react-redux'
import { searchHotel, starsHotel } from '../lib/http'
import { getAllStars } from '../actions'
import { Filters } from '../components'

const mapDispatchToProps = dispatch => ({
  searchHotel: search => dispatch(searchHotel(search)),
  starsHotel: stars => dispatch(starsHotel(stars)),
  getAllStars: () => dispatch(getAllStars())
})

export default connect(
  null,
  mapDispatchToProps
)(Filters)