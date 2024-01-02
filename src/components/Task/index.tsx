import { useState } from "react";

import { Check } from "phosphor-react";
import { TaskType } from "../Tasks";

import styles from "./Task.module.css";

interface TaskProps {
  task: TaskType;
}

export function Task({ task }: TaskProps) {
  const [isChecked, setIsChecked] = useState(task.isChecked);

  function handleToggleIsChecked() {
    setIsChecked((oldIsChecked) => !oldIsChecked);
  }

  const taskClassName = isChecked
    ? styles.task + " " + styles.taskChecked
    : styles.task;

  return (
    <li className={taskClassName}>
      <div className={styles.checkboxWrapper}>
        <input type="checkbox" checked={isChecked} readOnly />
        <button className={styles.check} onClick={handleToggleIsChecked}>
          {isChecked && <Check />}
        </button>
      </div>
      <p>{task.content}</p>
    </li>
  );
}
