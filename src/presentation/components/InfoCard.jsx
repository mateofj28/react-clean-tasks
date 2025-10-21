import React from 'react';
import styles from '../css/InfoCard.module.css';
import { FaLock } from 'react-icons/fa';

export default function InfoCard({
    dayLabel = 'DAY 5',
    title = 'Chat GPT',
    description = 'ChatGPT ofrece asistencia inteligente para desarrollar ideas, escribir código, optimizar proyectos y resolver dudas técnicas o conceptuales en tiempo real. Ayuda a ahorrar tiempo, mejorar la calidad del trabajo y aprender más rápido, adaptándose a tu estilo y nivel de experiencia.',
    buttonText = 'Realizar prueba',
    icon: Icon = FaLock,
    headerColor = '#4CAF50',
    iconBg = '#87CEEB',
    onButtonClick
}) {
    return (
        <div className={styles.card}>

            {/* Encabezado */}
            <div className={styles.header} style={{ background: headerColor }}>
                <Icon />
                <span>{dayLabel}</span>
            </div>

            {/* Título con ícono */}
            <div className={styles.titleContainer}>
                <div className={styles.iconCircle} style={{ backgroundColor: iconBg }}>
                    <Icon />
                </div>
                <h3>{title}</h3>
            </div>

            {/* Descripción */}
            <p className={styles.description}>
                {description}
            </p>

            {/* Botón */}
            <button
                className={styles.button}
                onClick={onButtonClick}
            >
                {buttonText}
            </button>

        </div>
    );
}
