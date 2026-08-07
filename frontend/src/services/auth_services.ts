const API_BASE_URL = "http://localhost:8000";

export async function getCurrentUser() {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch current user");
    }

    return response.json();
}

export async function login(email: string, password: string) {
    const formData = new URLSearchParams();

    formData.append("username", email);
    formData.append("password", password);

    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Login failed");
    }

    const data = await response.json();

    localStorage.setItem("token", data.access_token);

    return data;
}


export async function register(
    name: string,
    email: string,
    password: string
) {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    });

    if (!response.ok) {
        throw new Error("Registration failed");
    }

    return response.json();
}

export function logout() {
    localStorage.removeItem("token");
}