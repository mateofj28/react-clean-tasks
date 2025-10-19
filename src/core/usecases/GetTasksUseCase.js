import { TaskRepository } from "../repositories/TaskRepository";

export async function GetTasksUseCase() {
  return await TaskRepository.getAll();
}
