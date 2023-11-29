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
    const response = await api.get(`/user/profile/${id}`, {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    });  
    return response
}

export const updateUser = async (updatedUserData) => {
    const response = await api.put('/user', updatedUserData, {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    });
    return response;
};


export const deleteUser = async (id) => {
    const response = await api.delete(`/user/${id}`, {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    })
    return response
}