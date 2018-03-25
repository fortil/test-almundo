let enviroment = process.env.NODE_ENV || 'development'

enviroment = enviroment === 'production' ? 'prod' : enviroment

const host = enviroment === 'development' ? 'http://localhost:8080' : 'https://myappweb.com'

const config = {
  URL_STATIC_FILES: `${host}/static/images/hotels`,
  SERVER_BASE: host
}

export default config