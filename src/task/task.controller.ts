import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.schema';

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get('/:id')
    async findOne(
        @Param('id') id: string,
    ): Promise<string> {
        return this.taskService.findOne(id);
    }

    @Get('/')
    async findAll(): Promise<string> {
        return this.taskService.findAll();
    }

    @Post('/')
    async create(
        @Body() task: Task,
    ): Promise<Task> {
        return this.taskService.create(task);
    }
}
