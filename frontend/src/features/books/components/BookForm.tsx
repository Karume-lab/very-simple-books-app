import { useState } from "react";
import type { Book, CreateBookDto } from "../../../__generated__/api/model";

/* TODO:
toasts
form validation with zod and react hook form
*/

interface BookFormProps {
  onSubmit: (book: CreateBookDto) => void;
  initialData?: Partial<Book>;
}

export const BookForm: React.FC<BookFormProps> = ({
  onSubmit,
  initialData = {},
}) => {
  const [title, setTitle] = useState(initialData.title || "");
  const [author, setAuthor] = useState(initialData.author || "");
  const [year, setYear] = useState(initialData.year || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, author, year });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 p-4 rounded space-y-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value))}
        className="w-full p-2 rounded bg-gray-800 text-white"
      />
      <button
        type="submit"
        className="bg-green-600 px-4 py-2 rounded hover:bg-green-500"
      >
        Save
      </button>
    </form>
  );
};
