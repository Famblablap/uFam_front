import api from "./config";

export const getAllFamProfiles = async () => {
    const response = await api.get("/families", {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    });
    return response
}

export const sedInvitation = async () => {
    const response = await api.get("/families/sendInvitation", {
        headers: {
            authorization: localStorage.getItem("token"),
        },
    });
    return response
}

