import { TaskRepository } from "../repositories/TaskRepository";

export const CreateTaskUseCase = async (title) => {
  return await TaskRepository.create({ title, completed: false });
};
