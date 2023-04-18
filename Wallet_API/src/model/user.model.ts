
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';
export class User extends mongoose.Document {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  salt: string;

  @Prop()
  address: string;

  @Prop({})
  firstName: string;


  @Prop({})
  phone_number: string


  @Prop({})
  old_passwords: string


  @Prop({})
  status: string

  @Prop({})
  reset_password: string


  @Prop({})
  email: string

  @Prop({})
  lastName: string;


  @Prop({})
  sms_verification: string

}

export const UserSchema = SchemaFactory.createForClass(User);

