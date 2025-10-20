export default function Setting() {
    return (
        <div style={{ paddingTop: "20px" }}>
            <h1>Configuración de la App</h1>

            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
                <div style={{ padding: "15px", background: "#f3f4f6", borderRadius: "10px" }}>
                    <h2>Notificaciones</h2>
                    <label>
                        <input type="checkbox" defaultChecked /> Recibir notificaciones por email
                    </label>
                </div>

                <div style={{ padding: "15px", background: "#f3f4f6", borderRadius: "10px" }}>
                    <h2>Privacidad</h2>
                    <label>
                        <input type="checkbox" /> Hacer mi perfil público
                    </label>
                </div>

                <div style={{ padding: "15px", background: "#f3f4f6", borderRadius: "10px" }}>
                    <h2>Seguridad</h2>
                    <button
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#ef4444",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Cambiar contraseña
                    </button>
                </div>
            </div>
        </div>
    );
}
