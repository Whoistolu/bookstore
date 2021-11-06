import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === '') return;
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    dispatch(addBook(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={submitBookToStore} className="form-container">
      <h3>ADD NEW BOOK</h3>
      <div className="form-inputs">
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
          name="category"
          id="books-categories"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          placeholder="Book Category"
        />
        <button className="submit-btn" type="submit">Add Books</button>
      </div>

    </form>
  );
};

export default AddBook;
