import { useState } from "react";

import { createTask } from "../services/task_services";
import type { Task, TaskStatus } from "../types/task";

type CreateTaskFormProps = {
    projectId: number;
    onTaskCreated: (task: Task) => void;
};

function CreateTaskForm({
    projectId,
    onTaskCreated,
}: CreateTaskFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<TaskStatus>("todo");

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        try {
            setError(null);

            const newTask = await createTask(
                projectId,
                title,
                description,
                status
            );

            onTaskCreated(newTask);

            setTitle("");
            setDescription("");
            setStatus("todo");
        } catch (error) {
            console.error(error);
            setError("Failed to create task");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Task</h2>

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
                        setStatus(event.target.value as TaskStatus)
                    }
                >
                    <option value="todo">To Do</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>

            <button type="submit">
                Create Task
            </button>

            {error && <p>{error}</p>}
        </form>
    );
}

export default CreateTaskForm;