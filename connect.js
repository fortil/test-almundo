const fs = require('fs')
/*
Se importa la data estática
*/
const DATA = require('./data.json')
/*
Conexión con mysql si existe el archivo database.json
*/
const mysql = require('mysql')
const configDatabase = fs.existsSync('./database.json') ? require('./database.json') : false
let connection = null

if (configDatabase) {
  try {
    connection = mysql.createPool(configDatabase)
    connection.getConnection((err, conn) => {
      if (err) {
        connection = null
      }
    })
  } catch (error) {
    console.log('No fue posible conectarse a la base de datos, revise su conexión')
  }
}

const fnsQueries = {
  getHotelsMySql: (_, cb) => {
    connection.getConnection((err, conn) => {
      conn.query('select * from hotels', (err, rows) => {
        if (err) throw err;
        conn.release()
        cb(rows)
      })
    })
  },
  getHotelsByIDMySql: (id, cb) => {
    connection.getConnection((err, conn) => {
      conn.query(`select * from hotels where id = ?`, [id], (err, rows) => {
        if (err) throw err;
        conn.release()
        cb(rows)
      })
    })
  },
  getHotelsByStarsMySql: (stars, cb) => {
    connection.getConnection((err, conn) => {
      const prep = stars.map(s => '?').join(',')
      conn.query(`select * from hotels where stars in (${prep})`, stars, (err, rows) => {
        if (err) throw err;
        conn.release()
        cb(rows)
      })
    })
  },
  getHotelsByNameMySql: (name, cb) => {
    connection.getConnection((err, conn) => {
      conn.query(`select * from hotels where name like '%?%'`, name, (err, rows) => {
        if (err) throw err;
        conn.release()
        cb(rows)
      })
    })
  },
  putHotelMySql: (hotel, cb) => {
    connection.getConnection((err, conn) => {
      const keys = Object.keys(hotel)
      const prep = keys.map((k) => '?').join(',')
      const values = Object.values(hotel)
      conn.query(`insert into hotels (${keys.join(',')} values(${prep}))`, values, (err, rows) => {
        if (err) throw err;
        conn.release()
        cb(rows)
      })
    })
  },
  putHotelMySql: (hotel, cb) => {
    connection.getConnection((err, conn) => {
      const keys = Object.keys(hotel)
      const prep = keys.map((k) => '?').join(',')
      const values = Object.values(hotel)
      conn.query(`insert into hotels (${keys.join(',')} values(${prep}))`, values, (err, rows) => {
        if (err) throw err;
        conn.release()
        cb(rows)
      })
    })
  },
  updateHotelMySql: ({ id, body }, cb) => {
    connection.getConnection((err, conn) => {
      const keys = Object.keys(body)
      const values = Object.values(body)
      const prev = keys.map(k => `${k} = ?`)
      conn.query(`update hotels ${prev.join(',')} where id = ?`, [...values, id], (err, rows) => {
        if (err) throw err;
        conn.release()
        cb(rows)
      })
    })
  },
  deleteHotelMySql: (id, cb) => {
    connection.getConnection((err, conn) => {
      conn.query(`delete hotels where id = ?`, [id], (err, rows) => {
        if (err) throw err;
        conn.release()
        cb(rows)
      })
    })
  },
  getHotels: (_, cb) => {
    cb(DATA)
  },
  getHotelsByID: (id, cb) => {
    const hotel = DATA.filter((hotel) => hotel.id === id)
    cb(hotel)
  },
  getHotelsByStars: (stars, cb) => {
    const hotels = DATA.filter((hotel) => stars.includes(hotel.stars))
    cb(hotels)
  },
  getHotelsByName: (name, cb) => {
    const nameRegExp = new RegExp(name, 'ig')
    const hotels = DATA
      .filter((hotel) => nameRegExp.test(hotel.name))
    cb(hotels)
  },
  putHotel: (hotel, cb) => {
    DATA.push(req.body)
    const json = JSON.stringify(DATA, null, 2)
    fs.writeFile('./data.json', json, 'utf8', (err, _) => {
      cb(DATA)
    })
  },
  updateHotel: ({ id, body }, cb) => {
    const hotel = DATA.filter((hotel) => hotel.id === id)
    if (!hotel.length) {
      cb(DATA)
      return
    }
    const newHotel = Object.assign(
      {},
      hotel[0],
      ...Object.keys(hotel[0]).map((key) => ({ [key]: body[key] }))
    )
    const newData = DATA.filter((hotel) => hotel.id !== req.params.hotel_id)
    newData.push(newHotel)
    const json = JSON.stringify(newData, null, 2)
    fs.writeFile('./data.json', json, 'utf8', (err, _) => {
      cb(newData)
    })
  },
  deleteHotel: (id, cb) => {
    const hotels = DATA.filter((hotel) => hotel.id !== id)
    const json = JSON.stringify(hotels, null, 2)
    fs.writeFile('./data.json', json, 'utf8', (err, _) => {
      cb([])
    })
  }
}


module.exports = (fn, cb, data) => {
  try {
    fnsQueries[fn + (connection ? 'MySql' : '')](data, cb)
  } catch (error) {
    console.log('Se maneja el error')
    console.log(error)
    cb([])
  }
}