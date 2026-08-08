import { useState } from "react";
import { createProject } from "../services/project_services";
import type { Project } from "../types/project";

type CreateProjectFormProps = {
    onProjectCreated: (project: Project) => void;
};

function CreateProjectForm({ onProjectCreated }: CreateProjectFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            setError(null);

            const newProject = await createProject(title, description);

            onProjectCreated(newProject);

            setTitle("");
            setDescription("");
        } catch (error) {
            console.error(error);
            setError("Failed to create project");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create Project</h2>

            <div>
                <label>Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>

            <div>
                <label>Description</label>
                <textarea
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>

            <button type="submit">Create Project</button>

            {error && <p>{error}</p>}
        </form>
    );
}

export default CreateProjectForm;