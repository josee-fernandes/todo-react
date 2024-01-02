import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskType, Tasks } from "./components/Tasks";

// import { v4 as uuidv4 } from "uuid";

import "./global.css";

import styles from "./App.module.css";
import { useState } from "react";

// const tasks: TaskType[] = [
//   {
//     id: uuidv4(),
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     isChecked: false,
//   },
//   {
//     id: uuidv4(),
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     isChecked: false,
//   },
//   {
//     id: uuidv4(),
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     isChecked: false,
//   },
//   {
//     id: uuidv4(),
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     isChecked: true,
//   },
//   {
//     id: uuidv4(),
//     content:
//       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
//     isChecked: true,
//   },
// ];

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  function createTask(task: TaskType) {
    setTasks((oldTasks) => [...oldTasks, task]);
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <NewTask onCreateTask={createTask} />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
