import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskType, Tasks } from "./components/Tasks";

// import { v4 as uuidv4 } from "uuid";

import "./global.css";

import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function createTask(task: TaskType) {
    setTasks((oldTasks) => [...oldTasks, task]);
  }

  function updateTasks(newTasks: TaskType[]) {
    setTasks(newTasks);
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <NewTask onCreateTask={createTask} />
        <Tasks tasks={tasks} onUpdateTasks={updateTasks} />
      </div>
    </div>
  );
}

export default App;
