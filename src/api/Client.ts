import axios from 'axios'
import * as ClientUtils from 'api/utils'

const client = axios.create({
  baseURL: 'http://localhost:3333',
  headers: { 'Content-Type': 'application/json' },
  timeout: 5000,
})

client.interceptors.request.use((requestConfig) => {
  ClientUtils.checkExpiredToken()
  return ClientUtils.configureHeader(requestConfig)
})

export default client
