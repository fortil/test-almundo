export const getByStars = stars => ({
  type: 'GET_BY_STARS',
  stars
})

export const searchHotelLocal = search => ({
  type: 'SEARCH_HOTEL',
  search
})

export const getAllStars = () => ({
  type: 'ALL_STARS'
})

export const setHotels = hotels => ({
  type: 'SET_HOTELS',
  hotels
})

export const setHotelsFilter = hotels => ({
  type: 'SET_HOTELS_FILTER',
  hotels
})
