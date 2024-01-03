import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";

import styles from "./NewTask.module.css";
import { TaskType } from "../Tasks";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface NewTaskProps {
  onCreateTask: (task: TaskType) => void;
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const [newTaskContent, setNewTaskContent] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskContent(event.target.value);
  }

  function handleNewChangeInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("A tarefa é obrigatória!");
  }

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTask: TaskType = {
      id: uuidv4(),
      content: newTaskContent,
      isChecked: false,
    };

    onCreateTask(newTask);

    setNewTaskContent("");
  }

  return (
    <form className={styles.newTask} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskContent}
        onChange={handleNewTaskChange}
        onInvalid={handleNewChangeInvalid}
        required
      />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </form>
  );
}
