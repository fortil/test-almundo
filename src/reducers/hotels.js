import configApp from '../config'

const stateInit = { hotels: [], filters: [] }

const hotels = (state = stateInit, action) => {
  switch (action.type) {
    case 'SET_HOTELS':
      const hotels = action.hotels
        .map((hotel) => Object.assign({}, hotel, { image: `${configApp.URL_STATIC_FILES}/${hotel.image}` }))
      return {
        filters: hotels,
        hotels
      }
    case 'SET_HOTELS_FILTER':
      return {
        ...state,
        filters: [
          ...action.hotels
            .map((hotel) => Object.assign({}, hotel, { image: `${configApp.URL_STATIC_FILES}/${hotel.image}` }))
        ]
      }
    /* 
    Todos los siguientes reducers funcionan cuando no hay 
    conexión con el servidor
    */
    case 'GET_BY_STARS':
      return {
        ...state,
        filters: [
          ...state.hotels
            .filter((hotel) => action.stars.includes(hotel.stars))
        ]
      }
    case 'SEARCH_HOTEL':
      const rgx = new RegExp(action.search, 'ig')
      return {
        ...state,
        filters: [
          ...state.hotels
            .filter((hotel) => rgx.test(hotel.name))  
        ]
      }
    case 'ALL_STARS':
      return {
        ...state,
        filters: [
          ...state.hotels
        ]
      }
    default:
      return state
  }
}

export default hotels