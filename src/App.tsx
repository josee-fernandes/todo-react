import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TaskType, Tasks } from "./components/Tasks";

import { v4 as uuidv4 } from "uuid";

import "./global.css";

import styles from "./App.module.css";

const tasks: TaskType[] = [
  {
    id: uuidv4(),
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isChecked: false,
  },
  {
    id: uuidv4(),
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isChecked: false,
  },
  {
    id: uuidv4(),
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isChecked: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <NewTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
