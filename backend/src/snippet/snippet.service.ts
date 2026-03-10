import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Snippet, SnippetDocument } from '~/schema/snippets.schema';
import { CreateSnippetDto } from '~/snippet/dto/createSnippet.dto';
import { QuerySnippetDto } from '~/snippet/dto/querySnippet.dto';
import { UpdateSnippetDto } from '~/snippet/dto/updateSnippet.dto';

@Injectable()
export class SnippetService {
  constructor(
    @InjectModel(Snippet.name) private snippetModel: Model<SnippetDocument>,
  ) {}

  async create(createSnippetDto: CreateSnippetDto): Promise<SnippetDocument> {
    const createdSnippet = new this.snippetModel(createSnippetDto);
    return createdSnippet.save();
  }

  async findAll(query: QuerySnippetDto): Promise<SnippetDocument[]> {
    const limit = Number(query.limit) || 10;
    const page = Number(query.page) || 1;
    const skip = (page - 1) * limit;

    const filter: Record<string, any> = {};

    if (query.tags?.length) {
      filter.tags = { $all: query.tags };
    }

    if (query.search) {
      filter.$or = [
        { title: { $regex: query.search, $options: 'i' } },
        { content: { $regex: query.search, $options: 'i' } },
      ];
    }

    return this.snippetModel.find(filter).limit(limit).skip(skip).exec();
  }

  async findOne(id: string): Promise<SnippetDocument> {
    const snippet = await this.snippetModel.findById(id).exec();
    if (!snippet) {
      throw new NotFoundException('Snippet not found');
    }
    return snippet;
  }

  async update(
    id: string,
    updateSnippetDto: UpdateSnippetDto,
  ): Promise<SnippetDocument> {
    const snippet = await this.snippetModel
      .findByIdAndUpdate(id, updateSnippetDto, {
        returnDocument: 'after',
        runValidators: true,
      })
      .exec();

    if (!snippet) {
      throw new NotFoundException('Snippet not found');
    }

    return snippet;
  }

  async deleteOne(id: string): Promise<SnippetDocument> {
    const deleted = await this.snippetModel.findByIdAndDelete(id).exec();

    if (!deleted) {
      throw new NotFoundException('Snippet not found');
    }

    return deleted;
  }
}
