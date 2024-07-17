import { apiClient } from "./config"


export const apiAddAchievement = async (payload) => {
    return apiClient.post("/achievements", payload)
}

export const apiGetAchievements = async () => {
    return apiClient.get("/achievements")
}

export const apiGetAchievementById = async () => {
    return apiClient.get(`/achievements/${id}`)
}

export const apiUpdateAchievement = async () => {
    return apiClient.patch(`/achievements/${id}`)
}

export const apiDeleteAchievement = async () => {
    return apiClient.delete(`/achievements/${id}`)
}