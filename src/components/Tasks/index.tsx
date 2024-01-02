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
  onUpdateTasks: (newTasks: TaskType[]) => void;
}

export function Tasks({ tasks, onUpdateTasks }: TasksProps) {
  function updateTaskCheckedStatus(updatedTask: TaskType) {
    // const newTasks = [...tasks, updatedTask];
    const newTasks = tasks.map((task) =>
      updatedTask.id === task.id ? updatedTask : task
    );

    onUpdateTasks(newTasks);
  }

  const isTasksEmpty = tasks.length === 0;
  const createdTasks = tasks.length;
  const finishedTasks = tasks.filter((task) => task.isChecked).length;

  return (
    <main className={styles.tasks}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>{createdTasks}</span>
        </div>
        <div className={styles.finishedTasks}>
          <strong>Concluídas</strong>
          {isTasksEmpty ? (
            <span>0</span>
          ) : (
            <span>
              {finishedTasks} de {createdTasks}
            </span>
          )}
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
          tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onCheckTask={updateTaskCheckedStatus}
            />
          ))
        )}
      </ul>
    </main>
  );
}
