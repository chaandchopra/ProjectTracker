import apiClient from "../apiClient";

export const getProjects = () => apiClient.get("/projects/");

export const getProjectById = (id: string) => apiClient.get(`/projects/${id}`);

export const updateProject = ( data: any ) => {
    const response = apiClient.put(`/projects/`, data);
    return response;
};

export const deleteProject = (id: string) => {
    const response = apiClient.delete(`/projects/${id}`);
    return response;
}