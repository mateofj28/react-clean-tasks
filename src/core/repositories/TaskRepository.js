
import axios from "axios";
import { Task } from "../models/Task";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const TaskRepository = {
  async getAll() {
    const res = await axios.get(API_URL + "?_limit=5");
    return res.data.map(task => new Task(task));
  },

  async create(task) {
    const res = await axios.post(API_URL, task);
    return new Task(res.data);
  },

  async update(id, data) {
    const res = await axios.put(`${API_URL}/${id}`, data);
    return new Task(res.data);
  },

  async delete(id) {
    await axios.delete(`${API_URL}/${id}`);
  },
};
