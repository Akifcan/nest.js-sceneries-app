import { Injectable, Body } from '@nestjs/common';
import { ImagesDto } from './images.dto'
import { Image, ImageDocument } from './image.schema'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class ImagesService {

    constructor(@InjectModel(Image.name) private catModel: Model<ImageDocument>) {}

    async randomImage() : Promise<Image>{
        const scenery = await this.catModel.aggregate([
            {
                $sample: { size: 1 }
            }
        ])
        return scenery[0]
    }
    async newScenery(body: ImagesDto) : Promise<Image>{
        return await this.catModel.create(body)
    }
}
