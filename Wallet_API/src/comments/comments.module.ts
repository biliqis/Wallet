import { Module } from '@nestjs/common';
import { CommentsService } from './service/comments.service';
import { CommentsController } from './controller/comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from 'src/model/comments.model';
import { Movie, MovieSchema } from 'src/model/movies.model';

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Comment.name,
        useFactory: () => {
          return CommentSchema;
        },
      },

      {
        name: Movie.name,
        useFactory: () => {
          return MovieSchema;
        },
      },
    ]),
  ],
})
export class CommentsModule {}
