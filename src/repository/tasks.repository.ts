import { connect, disconnect } from "../config/db.config";
import { TasksModel } from '../model';

export class TasksRepository {

    constructor() {
        console.log('In the Repository ::::::::')
        connect();
        console.log('In the Repository  :::::::::')
    }

    async createTask(task: any): Promise<any> {
        return await TasksModel.create(task);
    }

    async listTasks(): Promise<any> {
        return await TasksModel.find({});
    }

    async updateTask(task: any): Promise<any> {
        return await TasksModel.updateOne({taskId: {$eq: task.taskId}}, {taskName: task.taskName, assignee: task.assignee});
    }

    async removeTask(taskId: String): Promise<any> {
        return await TasksModel.findByIdAndRemove(taskId);
    }

}