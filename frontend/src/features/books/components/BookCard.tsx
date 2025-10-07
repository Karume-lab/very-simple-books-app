import type { Book } from "../../../__generated__/api/model";

interface BookCardProps {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded shadow-md flex justify-between items-center">
      <div>
        <h2 className="font-bold text-lg">{book.title}</h2>
        <p>{book.author}</p>
        <p>{book.year}</p>
      </div>
      <div className="flex gap-2">
        <button
          className="bg-blue-600 px-2 py-1 rounded hover:bg-blue-500"
          onClick={() => onEdit(book)}
        >
          Edit
        </button>
        <button
          className="bg-red-600 px-2 py-1 rounded hover:bg-red-500"
          onClick={() => onDelete(book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
