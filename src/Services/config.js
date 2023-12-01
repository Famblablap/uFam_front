import axios from 'axios'

const api = axios.create({
  baseURL: "https://ufam-back.onrender.com/api"
})

export default api