import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'config/config';
import { Task, TaskSchema } from './task.schema';

@Module({
    imports: [
      MongooseModule.forRoot(config.MONGO_URI),
      MongooseModule.forFeature([
        { name: Task.name, schema: TaskSchema },
      ]),
    ],
    controllers: [TaskController],
    providers: [
      {
        provide: "CONFIG",
        useValue: config
      },
      TaskService],
  })
export class TaskModule {}
