import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Comment } from './comment.schema';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
    @Prop()
    name: string;

    @Prop()
    artist: string;

    @Prop()
    age: number;

    @Prop()
    listens: number;

    @Prop()
    picture: string;

    @Prop()
    audio: string;

    @Prop()
    text: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'Comment' }] })
    comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);
