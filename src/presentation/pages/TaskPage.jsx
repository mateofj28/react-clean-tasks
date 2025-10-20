import React from "react";
import { TaskList } from "../components/TaskList";
import { TaskForm } from "../components/TaskForm";
import styles from "../css/TaskPage.module.css";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TaskPage() {
  return (
    <div className={styles.page}>

      <ToastContainer
        transition={Slide}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnHover
        draggable
        theme="colored"
      />

      <div className={styles.container}>
        <h1 className={styles.title}>
          📝 Task Manager
        </h1>
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
}
