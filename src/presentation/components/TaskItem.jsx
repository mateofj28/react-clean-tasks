import React from "react";
import { useTaskStore } from "../../state/useTaskStore";
import styles from "../css/TaskItem.module.css";

export const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTaskStore();

  return (
    <div
      className={`${styles.item} ${task.completed ? styles.completed : ""}`}
    >
      <div className={styles.left}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task)}
          className={styles.checkbox}
        />
        <span
          className={styles.title}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className={styles.delete}
      >
        🗑️
      </button>
    </div>
  );
};
