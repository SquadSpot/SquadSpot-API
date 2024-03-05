import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'config/config';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forRoot(config.MONGO_URI),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [
    {
      provide: "CONFIG",
      useValue: config
    },
    UserService
  ]
})
export class UserModule {}
