import axios from 'axios'

const api = axios.create({
  baseURL: "https://ufam-back.onrender.com/api"
})

// const api = axios.create({
//   baseURL: "http://localhost:3000/api"
// })

export default api