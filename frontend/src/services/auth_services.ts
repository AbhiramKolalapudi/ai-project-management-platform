const API_BASE_URL = "http://localhost:8000";

export async function getCurrentUser() {
    const response = await fetch(`${API_BASE_URL}/auth/me`);

    if (!response.ok) {
        throw new Error("Failed to fetch current user");
    }

    return response.json();
}