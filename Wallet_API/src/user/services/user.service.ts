import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/model/user.model";
import { RegisterUserDto } from "../dto/dto";

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly userService: UserService,
  ) {
  }

  async CreateUser(data: RegisterUserDto) {
    const { 
      username,
      password,
      salt,
      address,
      firstName,
      email,
      lastName,
      phonenumber,
    } = data


  }
}
