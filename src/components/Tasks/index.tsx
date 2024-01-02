import { Task } from "../Task";

import styles from "./Tasks.module.css";

export interface TaskType {
  id: string;
  content: string;
  isChecked: boolean;
}

interface TasksProps {
  tasks: TaskType[];
}

export function Tasks({ tasks }: TasksProps) {
  return (
    <main className={styles.tasks}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div className={styles.finishedTasks}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </main>
  );
}
