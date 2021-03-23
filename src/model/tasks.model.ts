import { model, Schema, Model, Document } from 'mongoose';

export interface ITask extends Document {
    taskId: String;
    taskName: String;
    assignee: String;
}

const TaskSchema: Schema = new Schema({
    taskId: { type: String, required: true },
    taskName: { type: String, required: true },
    assignee: { type: String, required: true }
});

export const TasksModel: Model<ITask> = model<ITask>('task', TaskSchema);