import { useSelector } from 'react-redux';
import AddBook from './Addbook';
import IndividualBook from './Booklist';

const BooksPage = () => {
  const { booksReducer } = useSelector((state) => state);

  return (
    <>
      <div className="books-container d-flex">

        {booksReducer.map((book) => (
          <IndividualBook
            key={book.id}
            title={book.title}
            category={book.category}
            id={book.id}
          />
        ))}

      </div>
      <AddBook />
    </>
  );
};

export default BooksPage;
