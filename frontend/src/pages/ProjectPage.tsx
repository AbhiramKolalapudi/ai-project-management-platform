import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    getProject,
    updateProject,
    deleteProject,
} from "../services/project_services";

import { getTasks } from "../services/task_services";

import TaskList from "../components/TaskList";
import CreateTaskForm from "../components/CreateTaskForm";

import type { Project } from "../types/project";
import type { Task } from "../types/task";

function ProjectPage() {
    const { projectId } = useParams();
    const navigate = useNavigate();

    const [project, setProject] = useState<Project | null>(null);
    const [tasks, setTasks] = useState<Task[]>([]);

    const [error, setError] = useState<string | null>(null);

    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (!projectId) {
            return;
        }

        const loadProject = async () => {
            try {
                const data = await getProject(Number(projectId));
                setProject(data);
            } catch (error) {
                console.error(error);
                setError("Failed to load project");
            }
        };

        loadProject();
    }, [projectId]);

    useEffect(() => {
        if (!projectId) {
            return;
        }

        const loadTasks = async () => {
            try {
                const projectTasks = await getTasks(Number(projectId));
                setTasks(projectTasks);
            } catch (error) {
                console.error(error);
                setError("Failed to load tasks");
            }
        };

        loadTasks();
    }, [projectId]);

    async function handleSave() {
        if (!projectId) {
            return;
        }

        try {
            setError(null);

            const updatedProject = await updateProject(
                Number(projectId),
                title,
                description
            );

            setProject(updatedProject);
            setIsEditing(false);
        } catch (error) {
            console.error(error);
            setError("Failed to update project");
        }
    }

    async function handleDelete() {
        if (!projectId) {
            return;
        }

        const confirmed = window.confirm(
            "Are you sure you want to delete this project?"
        );

        if (!confirmed) {
            return;
        }

        try {
            setError(null);

            await deleteProject(Number(projectId));

            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            setError("Failed to delete project");
        }
    }

    function handleTaskCreated(task: Task) {
        setTasks((prevTasks) => [...prevTasks, task]);
    }

    function handleTaskUpdated(updatedTask: Task) {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === updatedTask.id
                    ? updatedTask
                    : task
            )
        );
    }

    function handleTaskDeleted(taskId: number) {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== taskId)
        );
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!project) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {isEditing ? (
                <div>
                    <h1>Edit Project</h1>

                    <div>
                        <label>Title</label>

                        <input
                            type="text"
                            value={title}
                            onChange={(event) =>
                                setTitle(event.target.value)
                            }
                        />
                    </div>

                    <div>
                        <label>Description</label>

                        <textarea
                            value={description}
                            onChange={(event) =>
                                setDescription(event.target.value)
                            }
                        />
                    </div>

                    <button onClick={handleSave}>
                        Save
                    </button>

                    <button
                        onClick={() => {
                            setTitle(project.title);
                            setDescription(
                                project.description ?? ""
                            );
                            setIsEditing(false);
                        }}
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <div>
                    <h1>{project.title}</h1>

                    <p>{project.description}</p>

                    <button
                        onClick={() => {
                            setTitle(project.title);
                            setDescription(
                                project.description ?? ""
                            );
                            setIsEditing(true);
                        }}
                    >
                        Edit
                    </button>

                    <button onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            )}

            <hr />

            <h2>Tasks</h2>

            <CreateTaskForm
                projectId={Number(projectId)}
                onTaskCreated={handleTaskCreated}
            />

            <TaskList
                tasks={tasks}
                onTaskUpdated={handleTaskUpdated}
                onTaskDeleted={handleTaskDeleted}
            />
        </div>
    );
}

export default ProjectPage;