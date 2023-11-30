import api from "./config"

export const createContent = async (contentData) => {
  const token = localStorage.getItem("token")
  return api.post("/content", contentData, {
    headers: {
      authorization: token,
    },
  })
}