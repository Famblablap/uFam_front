import api from "./config";

export const getProfile = async ()=> {
    const response = await api.get("/user/profile", {
        headers: {
            authorization: localStorage.getItem("token"),
          },
    })
    return response
}

export const getFamProfile = async (id) => {
    console.log(id)
    const response = await api.get(`/user/profile/${id}`, {
        headers: {
            authorization: localStorage.getItem("token"),
          },
    });
    console.log(response)
    return response
}