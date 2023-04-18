import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controllers/user.controller';
import { User } from "src/model/user.model";
import { UserSchema } from 'src/model/user.model';
import {UserService} from './services/user.service'
@Global()
@Module({
  controllers:[UserController],
  providers:[UserService],
  exports:[UserService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          return UserSchema;
        },
      },
    ]),
  ],
})
export class UserModule {}



