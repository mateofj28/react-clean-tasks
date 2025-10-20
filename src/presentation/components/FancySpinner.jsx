import React, { useEffect, useState } from "react";
import styles from "../css/FancySpinner.module.css";

export default function FancySpinner({ loading }) {
    const [showSpinner, setShowSpinner] = useState(loading);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        if (!loading) {
            // inicia la animación de salida
            setExiting(true);
            // espera 1s (duración del fadeOut) antes de desmontar el spinner
            const timeout = setTimeout(() => setShowSpinner(false), 1000);
            return () => clearTimeout(timeout);
        } else {
            // cuando vuelva a estar en carga, mostrar el spinner de nuevo
            setShowSpinner(true);
            setExiting(false);
        }
    }, [loading]);

    if (!showSpinner) return null;

    return (
        // <div className={styles.orbit}></div>
        // <div className={styles.dots}>
        //     <div className={styles.dot}></div>
        //     <div className={styles.dot}></div>
        //     <div className={styles.dot}></div>
        // </div>
        // <div className={styles.galaxy}></div>
        // <div className={styles.wave}>
        //     <div className={styles.bar}></div>
        //     <div className={styles.bar}></div>
        //     <div className={styles.bar}></div>
        //     <div className={styles.bar}></div>
        // </div>
        // <div className={styles.neonRing}></div>
        //     <div className={styles.wrapper}>
        //     <svg className={styles.spinner} viewBox="22 22 44 44">
        //       <circle className={styles.path} cx="44" cy="44" r="20" fill="none" strokeWidth="4" />
        //     </svg>
        //   </div>
        <div className={styles.eq}>
            <div className={styles.bar} style={{ animationDelay: "0s" }} />
            <div className={styles.bar} style={{ animationDelay: "0.08s" }} />
            <div className={styles.bar} style={{ animationDelay: "0.16s" }} />
            <div className={styles.bar} style={{ animationDelay: "0.24s" }} />
            <div className={styles.bar} style={{ animationDelay: "0.32s" }} />
        </div>
    );
}
