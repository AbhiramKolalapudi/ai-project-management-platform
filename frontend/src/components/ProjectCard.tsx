import type { Project } from "../types/project";

type ProjectCardProps = {
    project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    );
}

export default ProjectCard;