import type { Task } from "../types/task";
import TaskCard from "./TaskCard";

type TaskListProps = {
    tasks: Task[];
    onTaskUpdated: (task: Task) => void;
    onTaskDeleted: (taskId: number) => void;
};

function TaskList({
    tasks,
    onTaskUpdated,
    onTaskDeleted,
}: TaskListProps) {
    if (tasks.length === 0) {
        return <p>No tasks yet.</p>;
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    onTaskUpdated={onTaskUpdated}
                    onTaskDeleted={onTaskDeleted}
                />
            ))}
        </div>
    );
}

export default TaskList;