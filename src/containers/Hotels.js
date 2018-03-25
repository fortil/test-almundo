import { connect } from 'react-redux'
import { Hotels } from '../components'

/* 
Los hoteles que se mostrarán serán los filtrados
tanto obtenidos por la web como los localmente
en caso de fallar traerlos al servidor
*/
const mapStateToProps = state => (
  { hotels: state.hotels.filters }
)

export default connect(mapStateToProps)(Hotels)