import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './task.schema';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) { }

    async create(task: Task): Promise<Task> {
        const createdTask = new this.taskModel(task);
        return createdTask.save();
    }

    async findAll(): Promise<string> {
        return 'This action returns all tasks';
    }

    async findOne(id: string): Promise<string> {
        return `This action returns a #${id} task`;
    }
}
