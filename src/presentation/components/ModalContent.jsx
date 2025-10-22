import React from "react";
import styles from "../css/ModalContent.module.css";

const ModalContent = ({ onContinue, title, description, icon: Icon, headerColor, iconBg }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner} style={{ background: headerColor }}>
        {/* banner vacío, sirve solo para color de fondo */}
      </div>

      <div className={styles.body}>
        <div className={styles.iconWrapper}>
          <div className={styles.icon} style={{ backgroundColor: iconBg }}>
            <Icon size={30} color="black" />
          </div>
        </div>

        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>
          {description}
        </p>

        <div className={styles.actions}>
          <button className={styles.button} onClick={onContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
