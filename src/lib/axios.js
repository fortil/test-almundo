import axios from 'axios'
import configApp from '../config'

export default axios.create({
  baseURL: `${configApp.SERVER_BASE}`,
  timeout: 1000
})