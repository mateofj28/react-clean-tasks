import React from "react";
import { TaskList } from "../components/TaskList";
import { TaskForm } from "../components/TaskForm";
import styles from "../css/TaskPage.module.css";

export const TaskPage = () => {
  return (
    <div className={styles.page}>  
      <div className={styles.container}>
        <h1 className={styles.title}>
          📝 Task Manager
        </h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};
