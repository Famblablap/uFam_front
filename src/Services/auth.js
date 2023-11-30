import api from "./config"

export async function login(loginData) {
    try {
        const { data } = await api.post("/auth/login", loginData)
        return data
    } catch (error) {
        console.error("Login error", error)
    }
} 

export async function signup(signupData) {
    try {
        const { data } = await api.post("/auth/signup", signupData)
        return data
    } catch (error) {
        console.error("Signup error", error)
    }
}