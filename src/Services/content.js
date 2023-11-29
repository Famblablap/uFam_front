import api from "./config"

export const createPhoto = async (photoData) => {
  const token = localStorage.getItem("token")
  return api.post("/photo", photoData, {
    headers: {
      authorization: token,
    },
  })
}

