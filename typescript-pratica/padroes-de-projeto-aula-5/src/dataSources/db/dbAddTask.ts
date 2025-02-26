import { Task } from "../../entities/task";
import { AddATaskModel, AddTask, AddTaskRepository } from "../../usecases";

export class DbAddTask implements AddTask {
  constructor(private readonly addTaskRepository: AddTaskRepository) {}

  async add(taskData: AddATaskModel): Promise<Task> {
    const task = await this.addTaskRepository.add(taskData);
    return task;
  }
}
