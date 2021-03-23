import { TasksRepository } from '../repository';

export class TasksService {

    tasksRepository: TasksRepository;

    constructor() {
        this.tasksRepository = new TasksRepository();
    }

    public async createTask(task: any) {
        return await this.tasksRepository.createTask(task);
    }

    public async listTasks() {
        return await this.tasksRepository.listTasks();
    }

    public async updateTask(task: any) {
        return await this.tasksRepository.updateTask(task);
    }

    public async removeTask(taskId: String) {
        return await this.tasksRepository.removeTask(taskId);
    }

}