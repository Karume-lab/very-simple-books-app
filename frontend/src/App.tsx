import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  getBooksControllerFindAllQueryKey,
  useBooksControllerCreate,
  useBooksControllerFindAll,
  useBooksControllerRemove,
  useBooksControllerUpdate,
} from "./__generated__/api/books/books";
import type {
  Book,
  CreateBookDto,
  UpdateBookDto,
} from "./__generated__/api/model";
import { BookForm, BookList } from "./features/books";

/* TODO:
sketch ui and improve it (give it a more professional feel)
add icons
hide add new book form behind a button
convert import paths to be absolute
*/

const App = () => {
  const queryClient = useQueryClient();
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const { data: books, isLoading } = useBooksControllerFindAll<Book[]>();

  const createMutation = useBooksControllerCreate<CreateBookDto>({
    mutation: {
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: getBooksControllerFindAllQueryKey(),
        }),
    },
  });

  const updateMutation = useBooksControllerUpdate<UpdateBookDto>({
    mutation: {
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: getBooksControllerFindAllQueryKey(),
        }),
    },
  });

  const deleteMutation = useBooksControllerRemove<void>({
    mutation: {
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: getBooksControllerFindAllQueryKey(),
        }),
    },
  });

  const handleSubmit = (book: CreateBookDto) => {
    if (editingBook) {
      updateMutation.mutate({ id: editingBook.id, data: book });
      setEditingBook(null);
    } else {
      createMutation.mutate({ data: book });
    }
  };

  const handleEdit = (book: Book) => setEditingBook(book);
  const handleDelete = (id: number) => deleteMutation.mutate({ id });

  return (
    <div className="bg-gray-900 min-h-screen p-4">
      <h1 className="text-white text-3xl mb-4">Books SPA</h1>
      <BookForm
        onSubmit={handleSubmit}
        initialData={editingBook ?? undefined}
      />
      <div className="mt-4">
        <BookList
          books={books ?? []}
          onEdit={handleEdit}
          onDelete={handleDelete}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default App;
