import type { Project } from "../types/project";

const API_BASE_URL = "http://localhost:8000";

export async function getProjects(): Promise<Project[]> {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/projects`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    return response.json();
}