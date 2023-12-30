import { Task } from "../Task";

import styles from "./Tasks.module.css";

export function Tasks() {
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
        <Task />
        <Task />
        <Task />
        <Task />
      </ul>
    </main>
  );
}
