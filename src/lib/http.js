import axios from './axios'
import { setHotels, searchHotelLocal, getByStars, setHotelsFilter, getAllStars } from '../actions'

export function getHotels() {
  return async dispatch => {
    try {
      const { data } = await axios.get('/hotels')
      dispatch(setHotels(data.data))
    } catch (error) {
      console.log(error)
    }
  }
}

export function searchHotel(name) {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/search/${encodeURIComponent(name)}`)
      dispatch(setHotelsFilter(data.data))
    } catch (error) {
      console.log(error)
      dispatch(searchHotelLocal(name))
    }
  }
}

export function starsHotel(stars) {
  return async dispatch => {
    try {
      if (!stars.length) {
        return dispatch(getAllStars())
      }
      const { data } = await axios.get(`/starts/${stars.join(',')}`)
      dispatch(setHotelsFilter(data.data))
    } catch (error) {
      console.log(error)
      dispatch(getByStars(stars))
    }
  }
}