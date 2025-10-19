import React, { useState } from "react";
import { useTaskStore } from "../../state/useTaskStore";
import styles from "../css/TaskForm.module.css";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const { addTask } = useTaskStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addTask(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <input
        type="text"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <button
        type="submit"
        className={styles.button}
      >
        Add
      </button>
    </form>
  );
};
