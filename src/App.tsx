import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskType, Tasks } from "./components/Tasks";

import "./global.css";

import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function updateSavedTasks(tasksToSave: TaskType[]) {
    localStorage.setItem("tasks", JSON.stringify(tasksToSave));
  }

  function getTasks() {
    const savedTasks =
      JSON.parse(localStorage.getItem("tasks") as string) ?? [];

    setTasks(savedTasks);
  }

  function createTask(task: TaskType) {
    const newTasks = [...tasks, task];

    updateSavedTasks(newTasks);

    setTasks(newTasks);
  }

  function updateTasks(newTasks: TaskType[]) {
    updateSavedTasks(newTasks);

    setTasks(newTasks);
  }

  useEffect(() => {
    getTasks();
  }, []);

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
