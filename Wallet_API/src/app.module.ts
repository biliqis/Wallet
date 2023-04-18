import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { envConfiguration } from '../envConfiguration';
import { MoviesModule } from './movies/movies.module';
import { CommentsModule } from './comments/comments.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory:(configService: ConfigService) => ({
        
        uri: configService.get(envConfiguration.CONNECTION_STRING),
      }),
      
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: false,
      envFilePath: ['.env'],
    }),
    forwardRef(() => UserModule),

    MoviesModule,
    CommentsModule,
    UserModule,
    AuthModule
  ],
  exports:[],
  controllers: [],
  providers: [],
})
export class AppModule {}
