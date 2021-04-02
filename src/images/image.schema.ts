import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ImageDocument = Image & Document

@Schema()
export class Image {
  @Prop({ required: true, min: 3, max: 20 })
  author: string;

  @Prop({ required: true, max:  50})
  location: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ default: Date.now })
  createdAt: Date
}

export const ImageSchema = SchemaFactory.createForClass(Image);