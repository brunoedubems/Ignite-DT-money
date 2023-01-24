import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://ignite-dt-money-server.onrender.com',
})
