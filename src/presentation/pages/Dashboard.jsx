import styles from "../css/Dashboard.module.css";
import React, { useEffect, useState } from "react";
import { FaCalendarDay, FaChartBar, FaChartPie } from "react-icons/fa";

export default function Dashboard() {
    const [dailyProgress, setDailyProgress] = useState(60); // %
    const [weeklyEfficiency, setWeeklyEfficiency] = useState(75); // %
    const [monthlyPerformance, setMonthlyPerformance] = useState(82); // %

    // Simula pequeños cambios dinámicos en las estadísticas
    useEffect(() => {
        const interval = setInterval(() => {
            setDailyProgress((prev) => Math.min(100, prev + Math.random() * 5));
            setWeeklyEfficiency((prev) => Math.min(100, prev + Math.random() * 2));
            setMonthlyPerformance((prev) => Math.min(100, prev + Math.random() * 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.dashboardContainer}>
            <h1 className={styles.dashboardTitle}>Panel de Rendimiento</h1>
            <p className={styles.dashboardSubtitle}>
                Revisa tus estadísticas generales y tu progreso actual.
            </p>

            <div className={styles.statsContainer}>
                {/* --- Productividad Diaria --- */}
                <div className={styles.statCard}>
                    <FaCalendarDay className={styles.icon} />
                    <h2>Productividad Diaria</h2>
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressFill}
                            style={{ width: `${dailyProgress}%` }}
                        ></div>
                    </div>
                    <p>{dailyProgress.toFixed(0)}% de tareas completadas hoy</p>
                </div>

                {/* --- Eficiencia Semanal --- */}
                <div className={styles.statCard}>
                    <FaChartBar className={styles.icon} />
                    <h2>Eficiencia Semanal</h2>
                    <div className={styles.weeklyChart}>
                        {[60, 80, 40, 90, 70, 85, 75].map((v, i) => (
                            <div
                                key={i}
                                className={styles.bar}
                                style={{ height: `${v / 1.5}%` }}
                            ></div>
                        ))}
                    </div>
                    <p>{weeklyEfficiency.toFixed(0)}% promedio semanal</p>
                </div>

                {/* --- Rendimiento Mensual --- */}
                <div className={styles.statCard}>
                    <FaChartPie className={styles.icon} />
                    <h2>Rendimiento Mensual</h2>
                    <div className={styles.circleProgress}>
                        <svg viewBox="0 0 36 36" className={styles.circularChart}>
                            <path
                                className={styles.circleBg}
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                                className={styles.circle}
                                strokeDasharray={`${monthlyPerformance}, 100`}
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <span className={styles.circleLabel}>
                            {monthlyPerformance.toFixed(0)}%
                        </span>
                    </div>
                    <p>Progreso acumulado del mes</p>
                </div>
            </div>
        </div>
    );
}
