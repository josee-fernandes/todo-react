import { Check, Trash } from "phosphor-react";
import { TaskType } from "../Tasks";

import styles from "./Task.module.css";

interface TaskProps {
  task: TaskType;
  onCheckTask: (updatedTask: TaskType) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({ task, onCheckTask, onDeleteTask }: TaskProps) {
  function handleToggleIsChecked() {
    const newTask = { ...task, isChecked: !task.isChecked };

    onCheckTask(newTask);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  const taskClassName = task.isChecked
    ? styles.task + " " + styles.taskChecked
    : styles.task;

  return (
    <li className={taskClassName}>
      <div className={styles.checkboxWrapper}>
        <input type="checkbox" checked={task.isChecked} readOnly />
        <button className={styles.check} onClick={handleToggleIsChecked}>
          {task.isChecked && <Check />}
        </button>
      </div>
      <p>{task.content}</p>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={14} />
      </button>
    </li>
  );
}
