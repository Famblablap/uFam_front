import api from "./config";

export const getAllFamMessages = async () => {
    const response = await api.get("/messages", {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    })
    console.log(response)
    return response
}

export const getOneFamMessages = async (id) => {
    console.log(id)
    const response = await api.get(`/messages/${id}`, {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    })
    return response
}

export const createMessage = async (id) => {
    const response = await api.post(`/messages/${id}`, {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    })
    return response
}

export const deleteMessage = async (id) => {
    const response = await api.delete(`/messages/${id}`, {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    })
    return response
}