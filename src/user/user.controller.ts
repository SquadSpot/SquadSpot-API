import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('/')
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get('/:id')
    async findOne(
        @Param('id') id: string,
    ): Promise<User> {
        return this.userService.findOne(id);
    }

    @Post('/')
    async create(
        @Body() user: User,
    ): Promise<User> {
        return this.userService.create(user);
    }
}
