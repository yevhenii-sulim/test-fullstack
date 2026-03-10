import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateSnippetDto } from '~/snippet/dto/createSnippet.dto';
import { QuerySnippetDto } from '~/snippet/dto/querySnippet.dto';
import { UpdateSnippetDto } from '~/snippet/dto/updateSnippet.dto';
import { ParseObjectIdPipe } from '~/snippet/pipes/parseObjectIdPipe.service';
import { SnippetService } from '~/snippet/snippet.service';

@Controller('snippets')
export class SnippetController {
  constructor(private readonly snippetService: SnippetService) {}
  @Get()
  getAllSnippets(@Query() query: QuerySnippetDto) {
    return this.snippetService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.snippetService.findOne(id);
  }

  @Post()
  create(@Body() createSnippetDto: CreateSnippetDto) {
    return this.snippetService.create(createSnippetDto);
  }

  @Patch(':id')
  update(
    @Body() updateSnippetDto: UpdateSnippetDto,
    @Param('id', ParseObjectIdPipe) id: string,
  ) {
    return this.snippetService.update(id, updateSnippetDto);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseObjectIdPipe) id: string) {
    return this.snippetService.deleteOne(id);
  }
}
