import { Controller, Get, Post, Body, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ImagesService } from './images.service'
import { ImagesDto } from './images.dto'
import { FileInterceptor } from '@nestjs/platform-express'


@Controller('images')
export class ImagesController {

  constructor(private imagesService: ImagesService){}

  @Get()
  getRandomImage(): string {
      return this.imagesService.randomImage()
  }
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  newScenery(@UploadedFile() file: Express.Multer.File, @Body() body: ImagesDto) : object{
      return {body, file}
  }
}
