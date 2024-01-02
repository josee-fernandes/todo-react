import { ClipboardText } from "phosphor-react";
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
  const isTasksEmpty = tasks?.length === 0;

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
        {isTasksEmpty ? (
          <div className={styles.emptyTasks}>
            <ClipboardText size={56} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        ) : (
          tasks.map((task) => <Task key={task.id} task={task} />)
        )}
      </ul>
    </main>
  );
}
