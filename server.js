const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const fs = require('fs')
const DB = require('./connect')
console.log(DB)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/static', express.static(path.join(__dirname, 'assets')))
app.use((req, res, next) => {
  /* 
  Para este caso se habilita la petición desde cualquier cliente
  pero en caso de producción no sería así
  */
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

const port = process.env.PORT || 8080

const router = express.Router()



/* 
Rutas de la API
*/

// Ruta principal
router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a nuestra API' })
})

// Obtiene todos los hoteles
router.get('/hotels', (req, res) => {
  DB('getHotels', (data) => {
    res.json({ data })
  })
})
// Obtiene un hotel en específico por id
router.route('/hotel/:hotel_id').get(({ params }, res) => {
  DB('getHotelsByID', (data) => {
    res.json({ data })
  }, params.hotel_id)
  // res.json({ data: hotel.length ? hotel[0] : {} })
})
// Obtiene los hoteles con la cantidad de estrellas consultadas
router.route('/starts/:count_stars').get(({ params }, res) => {
  const stars = params.count_stars.split(',').map(e => parseInt(e))
  DB('getHotelsByStars', (data) => {
    res.json({ data })
  }, stars)
})
// Busca el hotel por el nombre o coincidencia en el nombre
router.route('/search/:name').get(({ params }, res) => {
  DB('getHotelsByName', (data) => {
    res.json({ data })
  }, params.name)
})
/* 
Las siguientes funciones no están en los requerimientos
pero funcionan si se hacen pruebas a la API
*/
// Obtiene los hoteles con un rango en el precio
router.route('/price/:min/:max').get(({ params }, res) => {
  DB('getHotels', (data) => {
    const hotels = data.filter((hotel) => hotel.price > params.min && hotel.price < params.max)
    res.json({ data: hotels })
  })
})
// Obtiene los hoteles por cada comodidad
router.route('/amenities/:amenity').get(({ params }, res) => {
  DB('getHotels', (data) => {
    const amenity = params.amenity
    const hotels = data
                    .map((hotel) => hotel.amenities.includes(amenity) ? hotel : undefined)
                    .filter((h) => h !== undefined)
    res.json({ data: hotels })
  })
})


// ---------------------*---CRUD---*---------------------------
/* 
Añade un nuevo hotel a la lista
*/
router.put('/hotels', (req, res) => {
  // Se comprueba que tengan todos los parámetros necesarios
  const keys = ['id', 'name', 'stars', 'price', 'image', 'amenities'].map((key) => req.body[key])
  if (keys.includes(undefined)) {
    res.json({ error: 'Compruebe los datos para ingresar el nuevo hotel'})
    return
  }
  DB('putHotel', (data) => {
    res.json({ data })
  }, req.body)
})
/* 
Actualiza el hotel en cuestión con los nuevos parámetros enviados
*/
router.put('/hotel/:hotel_id', (req, res) => {
  DB('updateHotel', (data) => {
    res.json({ data })
  }, { id: req.params.hotel_id, body: req.body })
})
/*
Elimina el hotel pasado por el id
*/
router.delete('/hotel/:hotel_id', ({ params }, res) => {
  DB('deleteHotel', (data) => {
    res.json({ data })
  }, params.hotel_id)
})
// -----------------------------*---------------------------

app.use('/', router)
app.listen(port)
console.log('Server corriendo y escuchando en el puerto ' + port)