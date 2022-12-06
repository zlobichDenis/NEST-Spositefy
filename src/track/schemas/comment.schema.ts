import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Track } from './track.shema';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
    @Prop()
    username: string;

    @Prop()
    text: string;

    @Prop({ type: Types.ObjectId, ref: 'Track' })
    track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
