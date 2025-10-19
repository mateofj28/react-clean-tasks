Perfecto 💪 aquí tienes el **README.md** completo y listo para copiar y pegar directamente en tu proyecto 👇

---

```markdown
# 📝 React Clean Tasks — Aplicación CRUD de Tareas con Arquitectura Limpia

Este proyecto es una aplicación **CRUD de tareas** construida con **React 19**, **Zustand** para el manejo de estado y una **arquitectura limpia** inspirada en principios de **Clean Architecture**.  
Incluye una interfaz moderna, fluida y con transiciones suaves, sin depender de Tailwind CSS.

---

## 🚀 Características principales

✅ Arquitectura modular y escalable.  
✅ Manejo de estado global con **Zustand**.  
✅ Separación por capas: **core**, **data**, **state**, **ui**.  
✅ CRUD completo (Crear, Leer, Actualizar, Eliminar).  
✅ Animaciones suaves y diseño moderno.  
✅ Código 100% limpio y comentado.

---

## 📁 Estructura del proyecto

```

react-clean-tasks/
│
├── src/
│   ├── core/
│   │   ├── entities/
│   │   │   └── Task.js
│   │   ├── repositories/
│   │   │   └── TaskRepository.js
│   │   └── usecases/
│   │       ├── GetTasksUseCase.js
│   │       ├── CreateTaskUseCase.js
│   │       ├── ToggleTaskUseCase.js
│   │       └── DeleteTaskUseCase.js
│   │
│   ├── data/
│   │   └── api/
│   │       └── apiClient.js
│   │
│   ├── state/
│   │   └── useTaskStore.js
│   │
│   ├── ui/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskList.jsx
│   │   └── pages/
│   │       └── TaskPage.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js

````

---

## ⚙️ Instalación

Asegúrate de tener **Node.js 20.19+** instalado.

```bash
# Clona el repositorio
git clone https://github.com/tuusuario/react-clean-tasks.git

# Entra al proyecto
cd react-clean-tasks

# Instala dependencias
npm install
````

---

## 🧩 Dependencias principales

| Paquete     | Descripción                           |
| ----------- | ------------------------------------- |
| **react**   | Librería principal                    |
| **zustand** | Manejo de estado global               |
| **axios**   | Peticiones HTTP                       |
| **clsx**    | Manejo limpio de clases condicionales |
| **vite**    | Bundler rápido y moderno              |

---

## ▶️ Ejecución en desarrollo

```bash
npm run dev
```

El proyecto estará disponible en:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🧠 Arquitectura limpia

El proyecto sigue el principio **“Separation of Concerns”**:

* **core/** → Lógica del dominio (entidades, casos de uso, repositorios)
* **data/** → Comunicación con la API (infraestructura)
* **state/** → Estado global con Zustand
* **ui/** → Componentes y pantallas

Esto facilita la escalabilidad y el mantenimiento del código.

---

## 🎨 Interfaz moderna

El diseño se basa en estilos limpios con CSS nativo:

* Transiciones suaves (`transition`, `transform`)
* Sombras (`box-shadow`)
* Layout flexible (`flex`, `gap`, `grid`)
* Modo oscuro con `dark-mode` controlado por CSS

---

## 🧰 Scripts útiles

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Compila el proyecto para producción
npm run preview   # Vista previa de la build
```

---

## 🤝 Contribución

1. Haz un fork del proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Haz tus cambios y commitea (`git commit -m 'Añade nueva funcionalidad'`)
4. Sube tu rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request 🚀

---

## 📸 Captura del diseño

![alt text](image.png)

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT** — libre para usar, modificar y compartir.

---

**Desarrollado por:** Frank 💻
Con el apoyo de Mateo 🤝

