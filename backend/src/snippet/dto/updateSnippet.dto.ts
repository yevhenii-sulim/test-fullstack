import { PartialType } from '@nestjs/mapped-types';
import { CreateSnippetDto } from '~/snippet/dto/createSnippet.dto';

export class UpdateSnippetDto extends PartialType(CreateSnippetDto) {}
