import api from "./config"

export async function login(loginData) {
    try {
        const { data } = await api.post("/auth/login", loginData)
        console.log(data)
        return data
    } catch (error) {
        console.error("Error", error)
    }
}

// export async function signup(signupData) {
//   const response = await api.post("/auth/signup", signupData)
//   return response
// }