import type { Task, TaskStatus } from "../types/task";

const API_BASE_URL = "http://localhost:8000";


export async function getTasks(projectId: number): Promise<Task[]> {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_BASE_URL}/projects/${projectId}/tasks`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch tasks");
    }

    return response.json();
}


export async function createTask(
    projectId: number,
    title: string,
    description: string,
    status: TaskStatus
): Promise<Task> {
    const token = localStorage.getItem("token");

    const response = await fetch(
        `${API_BASE_URL}/projects/${projectId}/tasks`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                title,
                description,
                status,
            }),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to create task");
    }

    return response.json();
}


export async function updateTask(
    taskId: number,
    title: string,
    description: string,
    status: TaskStatus
): Promise<Task> {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title,
            description,
            status,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to update task");
    }

    return response.json();
}


export async function deleteTask(taskId: number): Promise<void> {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/tasks/${taskId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to delete task");
    }
}