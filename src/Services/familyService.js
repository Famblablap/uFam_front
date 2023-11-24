import api from "./config";

export async function getAllFamProfiles () {
    const response = await api.get("/families");
    return response
}