import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Tasks } from "./components/Tasks";

import "./global.css";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <NewTask />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
