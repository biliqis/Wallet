import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
    Query,
    UseGuards,
  } from '@nestjs/common';
import { UserService } from '../services/user.service';

  @Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}
  @Post('register')
  async registerUser(data){
    return await this.UserService.CreateUser(data)
    
  }
}

