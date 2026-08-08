import { useNavigate } from "react-router-dom";
import type { Project } from "../types/project";

type ProjectCardProps = {
    project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/projects/${project.id}`)}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectCard;