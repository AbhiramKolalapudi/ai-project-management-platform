import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCurrentUser } from "../services/auth_services";
import { logout } from "../services/auth_services";
import { getProjects } from "../services/project_services";

import Welcome from "../components/Welcome";
import ProjectList from "../components/ProjectList";
import Navbar from "../components/Navbar";

import type { User } from "../types/user";
import type { Project } from "../types/project";


function DashboardPage() {
    const navigate = useNavigate();

    const [user, setUser] = useState<User | null>(null);
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function loadUser() {
            try {
                const currentUser = await getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                console.error(error);
            }
        }

        async function loadProjects() {
            try {
                const allProjects = await getProjects();
                setProjects(allProjects);
            } catch (error) {
                console.error(error);
            }
        }

        loadUser();
        loadProjects();
    }, []);

    function handleLogout() {
        logout();
        navigate("/login");
    }

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <Navbar user={user} onLogout={handleLogout}/>

            <Welcome user={user} />

            <h2>Your Projects</h2>

            <ProjectList projects={projects}/>

        </div>
    );
}

export default DashboardPage;