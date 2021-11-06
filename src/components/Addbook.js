import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || author === '') return;
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitBookToStore} className="form-container">
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Book Title"
      />
      <input
        type="text"
        name="author"
        id="author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        placeholder="Book Author"
      />
      <button type="submit">Add Books</button>
    </form>
  );
};

export default AddBook;
