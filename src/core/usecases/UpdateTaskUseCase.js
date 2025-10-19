import { TaskRepository } from "../repositories/TaskRepository";

export const UpdateTaskUseCase = async (task) => {
  return await TaskRepository.update(task.id, { ...task, completed: !task.completed });
};
