import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../css/Modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  // Evita scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  const modalRoot = typeof document !== "undefined" ? document.getElementById("modal-root") : null;

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // evita cerrar si se hace click dentro
      >
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <div className={styles.content}>{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root") // crea un div con id="modal-root" en index.html
  );
};

export default Modal;
