import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

import { Request } from 'express';

interface MemberRequest extends Request {
  payload: {
    user_id: number;
  };
}

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  create(
    @Req() request: MemberRequest,
    @Body() createMemberDto: CreateMemberDto,
  ) {
    createMemberDto.user_id = request.payload.user_id;
    return this.membersService.create(createMemberDto);
  }

  @Get()
  findAll(@Req() request: MemberRequest) {
    return this.membersService.findAll(request.payload.user_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() request: MemberRequest) {
    return this.membersService.findOne(+id, request.payload.user_id);
  }

  @Patch(':id')
  update(
    @Req() request: MemberRequest,
    @Param('id') id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    return this.membersService.update(
      +id,
      updateMemberDto,
      request.payload.user_id,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() request: MemberRequest) {
    return this.membersService.remove(+id, request.payload.user_id);
  }
}
