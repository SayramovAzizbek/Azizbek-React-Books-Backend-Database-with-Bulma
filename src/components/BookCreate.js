import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBooksContext();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    createBook(title);
    setTitle("");
  };

  const handleChange = (evt) => {
    setTitle(evt.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create</button>
      </form>
    </div>
  );
};

export default BookCreate;
