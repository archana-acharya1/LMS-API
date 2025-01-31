import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsNotEmpty()
  @IsString()
  publisher: string;

  @IsNotEmpty()
  @IsDate()
  @Type(() => Date)
  published_date: Date;

  @IsNotEmpty()
  @IsNumber()
  ISBN: number;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsNumber()
  available_copies: number;

  @IsNumber()
  @IsNotEmpty()
  total_copies: number;
}
