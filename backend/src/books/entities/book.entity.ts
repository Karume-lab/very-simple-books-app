import { ApiProperty } from '@nestjs/swagger';

export class Book {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Clean Code' })
  title: string;

  @ApiProperty({ example: 'Robert C. Martin' })
  author: string;

  @ApiProperty({ example: 2008 })
  year: number;
}
