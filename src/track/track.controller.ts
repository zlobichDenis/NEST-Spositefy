import { Controller, Get, Post, Body, Param, Delete, UseInterceptors, UploadedFiles } from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { ObjectId } from "mongoose";

import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { Comment } from "./schemas/comment.schema";

@Controller('/tracks')

export class TrackController {
  constructor(private trackService: TrackService) {

  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'picture', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]))
  create(@UploadedFiles() files, @Body() dto: CreateTrackDto) {
    console.log(files)
    const { picture, audio } = files;
    return this.trackService.create(dto, picture[0], audio[0]);
  }

  @Get()
  async getAll() {
    return this.trackService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.trackService.getOne(id)
  }

  @Delete(':id')
  async delete(@Param('id') id: ObjectId) {
    return this.trackService.delete(id);
  }

  @Post('/comment')
  async addComment(@Body() dto: CreateCommentDto): Promise<Comment> {
    return this.trackService.addComment(dto);
  }
}