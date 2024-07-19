import { apiClient } from "./config"

export const apiAddProject = async () => {
    return apiClient.post("/projects", payload)
}

export const apiGetProjects = async () => {
    return apiClient.get("/projects")
}

export const apiGetProjectById = async () => {
    return apiClient.get(`/projects/${id}`)
}

export const apiUpdateProject = async () => {
    return apiClient.patch(`/projects/${id}`)
}

export const apiDeleteProject = async () => {
    return apiClient.delete(`/projects/${id}`)
}