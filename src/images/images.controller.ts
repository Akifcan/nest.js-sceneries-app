import { Controller, Get, Post, Body, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { ImagesService } from './images.service'
import { ImagesDto } from './images.dto'
import { FileInterceptor } from '@nestjs/platform-express'
import { storage } from '../utils'
import { Image } from './image.schema'




@Controller('images')
export class ImagesController {

  constructor(private imagesService: ImagesService){}

  @Get()
  getRandomImage(): Promise<Image> {
      return this.imagesService.randomImage()
  }
  @Post()
  @UseInterceptors(FileInterceptor('image', { storage }))
  newScenery(@UploadedFile() file: Express.Multer.File, @Body() body: ImagesDto) : Promise<Image>{
      try{
          const imagePath = file.filename
          return this.imagesService.newScenery(new ImagesDto(body.author, body.location, imagePath))
      }catch(error){
        throw new BadRequestException()
      }
  }
}
