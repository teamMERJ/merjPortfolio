import { apiClient } from "./config"


export const apiAddVolunteering = async (payload) => {
    return apiClient.post("/volunteering", payload)
}

export const apiGetVolunteering = async () => {
    return apiClient.get("/volunteering")
}

export const apiGetVolunteeringById = async () => {
    return apiClient.get(`/volunteering/${id}`)
}

export const apiUpdateVolunteering = async () => {
    return apiClient.patch(`/volunteering/${id}`)
}

export const apiDeleteVolunteering = async () => {
    return apiClient.delete(`/volunteering/${id}`)
}