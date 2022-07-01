import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://user:admin@cluster0.th8op.mongodb.net/?retryWrites=true&w=majority'),
    TrackModule,
  ]
})
export class AppModule {

}