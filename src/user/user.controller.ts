import {Get, Post, Body, Put, Delete, Param, Controller, UsePipes} from '@nestjs/common';
import {UserService} from './user.service';
import {UserRO} from './user.interface';
import {CreateUserDto, UpdateUserDto, LoginUserDto} from './dto';
import {HttpException} from '@nestjs/common/exceptions/http.exception';
import {User} from './user.decorator';
import {ValidationPipe} from '../shared/pipes/validation.pipe';

import {
    ApiUseTags,
    ApiBearerAuth
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('user')
@Controller('api')
export class UserController {

    constructor(private readonly userService: UserService) {
    }

    @Get('user')
    async findMe(@User('email') email: string): Promise<UserRO> {
        return await this.userService.findByEmail(email);
    }

    @Put('user')
    async update(@User('id') userId: number, @Body() userData: UpdateUserDto) {
        return await this.userService.update(userId, userData);
    }

    @UsePipes(new ValidationPipe())
    @Post('users')
    async create(@Body() userData: CreateUserDto) {
        return this.userService.create(userData);
    }

    @Delete('users/:username')
    async delete(@Param() params) {
        return await this.userService.delete(params.username);
    }

    @UsePipes(new ValidationPipe())
    @Post('users/login')
    async login(@Body() loginUserDto: LoginUserDto): Promise<UserRO> {
        const user = await this.userService.findOne(loginUserDto);

        const errors = {User: ' not found'};
        if (!user) {
            throw new HttpException({errors}, 401);
        }

        const token = await this.userService.generateJWT(user);
        const {email, username, bio} = user;
        const userRO = {email, token, username, bio};
        return {user: userRO};
    }
}
