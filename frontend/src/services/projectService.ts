import apiClient from "../apiClient";

export const getProjects = () => apiClient.get("/projects");

export const getProjectById = (id: string) => apiClient.get(`/projects/${id}`);

export const updateProject = (id: string, data: any) => apiClient.put(`/projects/${id}`, data);

export const deleteProject = (id: string) => apiClient.post(`/projects/${id}`);