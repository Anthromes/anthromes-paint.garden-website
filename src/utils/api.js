import axios from 'axios'
// const apiUrl = process.env.REACT_APP_API_URL || 'https://anth-api.herokuapp.com';
const API_VERSION = '/api/v1'
const apiUrl = `${process.env.REACT_APP_API_URL || 'https://api.paint.garden'}${API_VERSION}`

const api = {
  get(url, params) {
    let path = `${apiUrl}${url}`
    console.log(path);
    if (params) {
      Object.keys(params).forEach(key => {
        path += `&${key}=${encodeURIComponent(params[key])}`
      })
    }
    return axios.get(path)
  },

  post(url, data) {
    return axios.post(`${apiUrl}${url}`, data)
  },

  put(url, data) {
    return axios.put(`${apiUrl}${url}`, data)
  },

  delete(url) {
    return axios.delete(`${apiUrl}${url}`)
  },

  patch(url, data) {
    return axios.patch(`${apiUrl}${url}`, data)
  },

  all(values) {
    return axios.all(values)
  },

  getImageUrl(path) {
    return `${apiUrl}/${path}`
  },
}

export default api
