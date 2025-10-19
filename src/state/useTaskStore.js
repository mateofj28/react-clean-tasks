// Importamos la función 'create' desde la librería Zustand.
// Zustand es un gestor de estado ligero que permite crear un "store"
// sin necesidad de usar Redux u otras soluciones más complejas.
import { create } from "zustand";

// Importamos el caso de uso para obtener las tareas.
// Esto forma parte de la capa de dominio en la arquitectura limpia.
import { GetTasksUseCase } from "../core/usecases/GetTasksUseCase";

// Importamos el repositorio de tareas, que encapsula las operaciones de red (API).
// Esto pertenece a la capa de datos, y actúa como intermediario entre el dominio y la API.
import { TaskRepository } from "../core/repositories/TaskRepository";


// Creamos un "store" (almacén de estado) usando Zustand.
// Este store manejará toda la lógica y el estado global relacionado con las tareas.
// 'set' → permite actualizar el estado.
// 'get' → permite leer el estado actual.
export const useTaskStore = create((set, get) => ({

  // --- ESTADO GLOBAL ---
  // Lista de tareas cargadas actualmente.
  tasks: [],

  // Indicador de carga (true mientras se están obteniendo las tareas desde la API).
  loading: false,


  // --- ACCIONES / MÉTODOS DEL STORE ---

  // ✅ 1. Obtener todas las tareas desde la API (READ)
  fetchTasks: async () => {
    // Cambiamos el estado a "loading: true" antes de iniciar la petición.
    set({ loading: true });

    // Ejecutamos el caso de uso GetTasksUseCase, que a su vez usa el repositorio.
    // Esto mantiene la separación entre la lógica de negocio y la lógica de datos.
    const tasks = await GetTasksUseCase();

    // Actualizamos el estado con las tareas obtenidas y marcamos que ya no está cargando.
    set({ tasks, loading: false });
  },


  // ✅ 2. Crear una nueva tarea (CREATE)
  addTask: async (title) => {
    // Creamos una nueva tarea usando el repositorio, enviando los datos a la API.
    const newTask = await TaskRepository.create({
      title,          // título recibido como parámetro
      completed: false // nueva tarea siempre comienza sin completar
    });

    // Actualizamos el estado agregando la nueva tarea al arreglo existente.
    // 'get().tasks' obtiene la lista actual de tareas.
    // Usamos el operador spread (...) para mantener las tareas previas.
    set({ tasks: [...get().tasks, newTask] });
  },


  // ✅ 3. Alternar el estado "completado" de una tarea (UPDATE)
  toggleTask: async (task) => {
    // Creamos una copia de la tarea con el valor de 'completed' invertido.
    // Luego enviamos la actualización a la API mediante el repositorio.
    const updated = await TaskRepository.update(task.id, {
      ...task,
      completed: !task.completed
    });

    // Reemplazamos en el estado local la tarea modificada por su nueva versión.
    // Si el id coincide, reemplaza por 'updated'; si no, deja la tarea como estaba.
    set({
      tasks: get().tasks.map(t => t.id === task.id ? updated : t)
    });
  },


  // ✅ 4. Eliminar una tarea por su ID (DELETE)
  deleteTask: async (id) => {
    // Solicitamos al repositorio eliminar la tarea de la API.
    await TaskRepository.delete(id);

    // Luego actualizamos el estado filtrando todas las tareas
    // y removiendo aquella cuyo id coincida con el eliminado.
    set({
      tasks: get().tasks.filter(t => t.id !== id)
    });
  },
}));
