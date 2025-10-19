import { TaskRepository } from "../repositories/TaskRepository";

export const DeleteTaskUseCase = async (id) => {
  return await TaskRepository.delete(id);
};
