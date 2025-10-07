import type { Book } from "../../../__generated__/api/model";
import { BookCard } from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";

/* TODO:
infinite scrolling
sorting
filtering
searching
*/

interface BookListProps {
  books: Book[] | undefined;
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
  isLoading: boolean;
}

export const BookList: React.FC<BookListProps> = ({
  books,
  onEdit,
  onDelete,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <BookCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (!books || books.length === 0) {
    return (
      <div className="text-gray-400 text-center py-10">
        No books found. Add your first book above!
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
