import type {
  Book,
  CreateBookDto,
  UpdateBookDto,
} from "../../../__generated__/api/model";
import { axiosInstance } from "../../../lib/axios-instance";

export const getBooks = async (): Promise<Book[]> => {
  const { data } = await axiosInstance.get("/books");
  return data;
};

export const createBook = async (book: CreateBookDto): Promise<Book> => {
  const { data } = await axiosInstance.post("/books", book);
  return data;
};

export const updateBook = async (
  id: number,
  book: UpdateBookDto
): Promise<Book> => {
  const { data } = await axiosInstance.patch(`/books/${id}`, book);
  return data;
};

export const deleteBook = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/books/${id}`);
};
