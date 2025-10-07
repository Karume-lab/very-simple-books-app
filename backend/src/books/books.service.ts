import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
    },
    { id: 2, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813 },
    { id: 5, title: 'Moby-Dick', author: 'Herman Melville', year: 1851 },
  ];

  private nextId = 6;

  create(dto: CreateBookDto): Book {
    const book: Book = { id: this.nextId++, ...dto };
    this.books.push(book);
    return book;
  }

  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    const book = this.books.find((b) => b.id === id);
    if (!book) throw new NotFoundException(`Book with ID ${id} not found`);
    return book;
  }

  update(id: number, dto: UpdateBookDto): Book {
    const book = this.findOne(id);
    Object.assign(book, dto);
    return book;
  }

  remove(id: number): void {
    const index = this.books.findIndex((b) => b.id === id);
    if (index === -1)
      throw new NotFoundException(`Book with ID ${id} not found`);
    this.books.splice(index, 1);
  }
}
