import { useState } from "react";

import {
    updateTask,
    deleteTask,
} from "../services/task_services";

import type { Task, TaskStatus } from "../types/task";

type TaskCardProps = {
    task: Task;
    onTaskUpdated: (task: Task) => void;
    onTaskDeleted: (taskId: number) => void;
};

function TaskCard({
    task,
    onTaskUpdated,
    onTaskDeleted,
}: TaskCardProps) {
    const [isEditing, setIsEditing] = useState(false);

    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(
        task.description ?? ""
    );
    const [status, setStatus] = useState<TaskStatus>(task.status);

    const [error, setError] = useState<string | null>(null);

    async function handleSave() {
        try {
            setError(null);

            const updatedTask = await updateTask(
                task.id,
                title,
                description,
                status
            );

            onTaskUpdated(updatedTask);
            setIsEditing(false);
        } catch (error) {
            console.error(error);
            setError("Failed to update task");
        }
    }

    async function handleDelete() {
        const confirmed = window.confirm(
            "Are you sure you want to delete this task?"
        );

        if (!confirmed) {
            return;
        }

        try {
            setError(null);

            await deleteTask(task.id);

            onTaskDeleted(task.id);
        } catch (error) {
            console.error(error);
            setError("Failed to delete task");
        }
    }

    if (isEditing) {
        return (
            <div>
                <h3>Edit Task</h3>

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

                <div>
                    <label>Status</label>

                    <select
                        value={status}
                        onChange={(event) =>
                            setStatus(
                                event.target.value as TaskStatus
                            )
                        }
                    >
                        <option value="todo">
                            To Do
                        </option>

                        <option value="in_progress">
                            In Progress
                        </option>

                        <option value="done">
                            Done
                        </option>
                    </select>
                </div>

                <button onClick={handleSave}>
                    Save
                </button>

                <button
                    onClick={() => {
                        setTitle(task.title);
                        setDescription(task.description ?? "");
                        setStatus(task.status);
                        setIsEditing(false);
                    }}
                >
                    Cancel
                </button>

                {error && <p>{error}</p>}
            </div>
        );
    }

    return (
        <div>
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>Status: {task.status}</p>

            <button
                onClick={() => {
                    setTitle(task.title);
                    setDescription(task.description ?? "");
                    setStatus(task.status);
                    setIsEditing(true);
                }}
            >
                Edit
            </button>

            <button onClick={handleDelete}>
                Delete
            </button>

            {error && <p>{error}</p>}
        </div>
    );
}

export default TaskCard;