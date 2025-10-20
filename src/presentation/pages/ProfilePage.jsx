export default function Profile() {
    return (
        <div style={{ paddingTop: "20px" }}>
            <h1>Perfil de Usuario</h1>
            <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                <div style={{ flex: "0 0 200px" }}>
                    <img
                        src="https://i.pravatar.cc/200"
                        alt="Avatar"
                        style={{ width: "200px", borderRadius: "50%" }}
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <h2>Mateo</h2>
                    <p>Email: mateo@example.com</p>
                    <p>Miembro desde: Enero 2024</p>
                    <p>Rol: Administrador</p>

                    <button
                        style={{
                            marginTop: "15px",
                            padding: "10px 20px",
                            backgroundColor: "#3b82f6",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Editar Perfil
                    </button>
                </div>
            </div>
        </div>
    );
}
