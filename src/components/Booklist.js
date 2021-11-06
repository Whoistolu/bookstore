import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const IndividualBook = (prop) => {
  const { title, category, id } = prop;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      {title}
      {category}
      <button type="button" onClick={() => removeBookFromStore(id)}>Delete</button>
    </div>
  );
};

export default IndividualBook;
