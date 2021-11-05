import AddBook from './Addbook';
import IndividualBook from './booklist';

const BooksPage = (prop) => {
  const { data } = prop;

  return (
    <>
      <div className="books-container d-flex">
        <div>
          {data.map((book) => (
            <IndividualBook key={book.id} title={book.title} author={book.author} id={book.id} />
          ))}
        </div>
      </div>
      <AddBook />
    </>
  );
};

export default BooksPage;