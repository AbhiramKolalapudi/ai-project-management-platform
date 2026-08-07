import ProjectCard from "./ProjectCard";
import type { Project } from "../types/project";

type ProjectListProps = {
    projects: Project[];
};

function ProjectList({
    projects,
}: ProjectListProps) {
    return (
    <div>
        {projects.map((project) => (
            <ProjectCard
                key={project.id}
                project={project}
            />
        ))}
    </div>
    );
}

export default ProjectList;