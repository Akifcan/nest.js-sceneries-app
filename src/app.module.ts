import { Module } from '@nestjs/common';
import { ImagesModule } from './images/images.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://akifcan:hwGqAIjsOf08VZo6@cluster.xj7i3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    ImagesModule
  ],
})
export class AppModule {}
