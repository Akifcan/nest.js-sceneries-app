import { Injectable, Body } from '@nestjs/common';
import { ImagesDto } from './images.dto'

@Injectable()
export class ImagesService {
    randomImage() : string{
        return "random image"
    }
    newScenery(body: ImagesDto){
        return body
    }
}
