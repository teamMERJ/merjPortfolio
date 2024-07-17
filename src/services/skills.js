import { apiClient } from "./config"


export const apiAddSkill = async (payload) => {
    return apiClient.post("/skills", payload)
}

export const apiGetSKills = async () => {
return apiClient.get("/skills")
}

export const apiGetSkillById = async () => {
    return apiClient.get(`/skills/${id}`)
}

export const apiUpdateSkill = async () => {
    return apiClient.patch(`/skills/${id}`)
}

export const deleteSkill = async () => {
    return apiClient.delete(`/skills/${id}`)
}