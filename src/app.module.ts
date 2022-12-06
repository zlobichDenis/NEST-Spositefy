import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://user:admin@cluster0.th8op.mongodb.net/?retryWrites=true&w=majority'
        ),
        TrackModule,
        FileModule,
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static')
        })
    ]
})
export class AppModule {
}
