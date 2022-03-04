import { AxiosRequestConfig } from 'axios'

export function checkExpiredToken() {
  const expiration = sessionStorage.getItem('expiration')
  if (expiration && new Date(expiration).getTime() - new Date().getTime() < 0) {
    sessionStorage.removeItem('expiration')
    sessionStorage.removeItem('token')
  }
}

export function configureHeader(config: AxiosRequestConfig) {
  const requestConfig = { ...config }
  const token = sessionStorage.getItem('token')
  if (requestConfig.headers && token) {
    requestConfig.headers.Authorization = `Bearer ${token}`
  }
  return requestConfig
}
