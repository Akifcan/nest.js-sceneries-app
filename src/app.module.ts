import { Module } from '@nestjs/common';
import { ImagesModule } from './images/images.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './src/config/.env'
    }),
     ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'uploads')
    }),
    MongooseModule.forRoot(process.env.DB_HOST),
    ImagesModule
  ],
})
export class AppModule {}
