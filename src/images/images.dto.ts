import { MinLength, MaxLength , IsNotEmpty } from 'class-validator'

export class ImagesDto{

    @IsNotEmpty()
    @MinLength(3, { message: 'Adınızı çok kısa girdiniz' })
    @MaxLength(20, { message: 'Adınızı çok uzun girdiniz' })
    author: String
    @IsNotEmpty()
    @MaxLength(50, { message: 'Konumu çok uzun girdiniz' })
    location: String
    imageUrl: String

    constructor(author:String, location:String, imageUrl:String) {
        this.author = author
        this.location = location
        this.imageUrl = imageUrl
    }

}