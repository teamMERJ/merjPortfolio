import { apiClient } from "./config"


export const apiAddEducation = async (payload) => {
    return apiClient.post("/education", payload)
}

export const apiGetEducation = async () => {
    return apiClient.get("/education")
}

export const apiGetEducationById = async () => {
    return apiClient.get(`/education/${id}`)
}

export const apiUpdateEducation = async () => {
    return apiClient.patch(`/education/${id}`)
}

export const apiDeleteEducation = async () => {
    return apiClient.delete(`/education/${id}`)
}