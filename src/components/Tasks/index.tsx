import { Task } from "../Task";

import styles from "./Tasks.module.css";

export function Tasks() {
  return (
    <div className={styles.tasks}>
      Tasks
      <Task />
    </div>
  );
}
