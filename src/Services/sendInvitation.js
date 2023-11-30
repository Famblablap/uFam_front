import api from "./config";

export async function sendInvitation(invitationData) {
    try {
        const { data } = await api.post("/families/sendInvitation", {email: invitationData}, {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        })
        return data
    } catch (error) {
        console.error("Send Invitation error", error)        
    }
}