import axios, {AxiosRequestConfig} from 'axios'

const instance = axios.create({baseURL: process.env.REACT_APP_API_URL, withCredentials: true, timeout: 300000})

instance.interceptors.response.use((response) => response, errorHandler)

if (process.env.NODE_ENV !== 'production' && window.location.hostname === 'localhost') {
  instance.interceptors.request.use((config) => {
    // const {url, method, params, data} = config

    // eslint-disable-next-line no-console
    // console.log(`[Request]: ${getJson({url, method, params, data})}`)

    return config
  })

  instance.interceptors.response.use((response) => {
    // eslint-disable-next-line no-console
    // console.log(`[Response Data]: ${getJson(response.data)}`)

    return response
  })
}

function errorHandler(e: any) {

  if (!e.response) throw e

  // eslint-disable-next-line no-console

  // if (e.response.status === 403) window.open('/error/403', '_self')
  // else if (e.response.status >= 500) window.open('/error/500', '_self')

  throw e.response
}

export default (args: AxiosRequestConfig) => instance(args)
