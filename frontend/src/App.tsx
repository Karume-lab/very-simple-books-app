import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import type {
  Book,
  CreateBookDto,
  UpdateBookDto,
} from "./__generated__/api/model";
import { Loading } from "./common/components/Loading";
import { BookForm, BookList } from "./features/books";
import {
  createBook,
  deleteBook,
  getBooks,
  updateBook,
} from "./features/books/api";

const App = () => {
  const queryClient = useQueryClient();
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const { data: books, isLoading } = useQuery<Book[], Error>({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  const createMutation = useMutation<Book, Error, CreateBookDto>({
    mutationFn: createBook,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["books"] }),
  });

  const updateMutation = useMutation<
    Book,
    Error,
    { id: number; book: UpdateBookDto }
  >({
    mutationFn: ({ id, book }) => updateBook(id, book),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["books"] }),
  });

  const deleteMutation = useMutation<void, Error, number>({
    mutationFn: deleteBook,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["books"] }),
  });

  const handleSubmit = (book: CreateBookDto) => {
    if (editingBook) {
      updateMutation.mutate({ id: editingBook.id, book });
      setEditingBook(null);
    } else {
      createMutation.mutate(book);
    }
  };

  const handleEdit = (book: Book) => setEditingBook(book);
  const handleDelete = (id: number) => deleteMutation.mutate(id);

  if (isLoading) return <Loading />;

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <h1 className="text-white text-3xl mb-4">Books SPA</h1>
      <BookForm
        onSubmit={handleSubmit}
        initialData={editingBook ?? undefined}
      />
      <div className="mt-4">
        <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
