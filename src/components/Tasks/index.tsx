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
    const newTasks = tasks.map((task) =>
      updatedTask.id === task.id ? updatedTask : task
    );

    onUpdateTasks(newTasks);
  }

  function deleteTask(id: string) {
    const newTasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);

    onUpdateTasks(newTasksWithoutDeletedOne);
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
      {isTasksEmpty ? (
        <div className={styles.emptyTasks}>
          <ClipboardText size={56} />
          <p>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      ) : (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onCheckTask={updateTaskCheckedStatus}
              onDeleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </main>
  );
}
