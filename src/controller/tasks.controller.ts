import { TasksService } from '../service';

export class TasksController {

    private tasksService: TasksService;

    constructor() {
        this.tasksService = new TasksService();
    }

    public async listTasks() {
        return await this.tasksService.listTasks();
    }

    public async createTask(task: any) {
        return await this.tasksService.createTask(task);
    }

    public async updateTask(task: any) {
        return await this.tasksService.updateTask(task);
    }

    public async removeTask(taskId: String) {
        return await this.tasksService.removeTask(taskId);
    }

}