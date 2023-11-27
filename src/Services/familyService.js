import api from "./config";

export const getAllFamProfiles = async () => {
    const response = await api.get("/families", {
        headers: {
            authorization: localStorage.getItem("token"),
          },
    });
    return response
}


