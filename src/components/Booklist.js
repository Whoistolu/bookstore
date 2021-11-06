import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const IndividualBook = (prop) => {
  const { title, category, id } = prop;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book">
      <div className="title">
        <h2 className="category">{category}</h2>
        <h2 className="title">{title}</h2>
        <h3 className="author">Author</h3>
        <button type="button">Comments</button>
        <button type="button" onClick={() => removeBookFromStore(id)}>Remove</button>
        <button type="button">Edit</button>
      </div>

      <div className="load1">
        <AiOutlineLoading3Quarters />
        <div className="load">
          <span>
            64%
          </span>
          <span>Completed</span>
        </div>
      </div>

      <div className="chapter">
        <span>
          Current Chapter
        </span>
        <h3>CHAPTER 17</h3>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default IndividualBook;
