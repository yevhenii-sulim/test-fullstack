import { ArrayNotEmpty, IsArray, IsOptional, IsString } from 'class-validator';
export class QuerySnippetDto {
  @IsOptional()
  @IsString()
  limit: string;

  @IsOptional()
  @IsString()
  page: string;

  @IsOptional()
  @IsString()
  search: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsString()
  filter: string;
}
