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


export async function getProject(projectId: number): Promise<Project> {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch project");
    }

    return response.json();
}


export async function createProject(
    title: string,
    description: string
): Promise<Project> {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/projects`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title,
            description,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to create project");
    }

    return response.json();
}


export async function updateProject(
    projectId: number,
    title: string,
    description: string
): Promise<Project> {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title,
            description,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to update project");
    }

    return response.json();
}


export async function deleteProject(projectId: number): Promise<void> {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/projects/${projectId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to delete project");
    }
}