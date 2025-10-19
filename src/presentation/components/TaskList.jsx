import React, { useEffect } from "react";
import { useTaskStore } from "../../state/useTaskStore";
import { TaskItem } from "./TaskItem";
import styles from "../css/TaskList.module.css";

export const TaskList = () => {
  const { tasks, fetchTasks, loading } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  if (loading) {
    return <p className={styles.loading}>Loading tasks...</p>;
  }

  return (
    <div className={styles.list}>
      {tasks.length === 0 ? (
        <p className={styles.empty}>No tasks yet 🎯</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};
