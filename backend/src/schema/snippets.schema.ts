import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SnippetDocument = HydratedDocument<Snippet>;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Snippet {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ type: [String] })
  tags: string[];

  @Prop({ required: true })
  type: string;

  created_at: Date;
  updated_at: Date;
}

export const SnippetSchema = SchemaFactory.createForClass(Snippet);
