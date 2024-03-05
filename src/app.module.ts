import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'config/config';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TaskService } from './task/task.service';

@Module({
  imports: [
    MongooseModule.forRoot(config.MONGO_URI),
    UserModule,
    TaskModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: "CONFIG",
      useValue: config
    },
    AppService
  ],
})
export class AppModule {}
