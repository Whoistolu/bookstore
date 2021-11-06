/* eslint-disable */
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const INITIALIZE_BOOKS = 'bookStore/books/INITIALIZE_BOOKS';
const initialState = [];
import { fetchApiBooks, addApiBook, removeApiBook } from "../../components/api";

export const addBook = (payload) => ( async (dispatch) => {
  await addApiBook(payload);
  dispatch({
    type: ADD_BOOK,
    payload,
  })
});
export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const initializeBooks = () => (async (dispatch) => {
  const books = await fetchApiBooks();
  const data = Object.entries(books).map(([itemId, [book]]) => ({
    id: itemId,
    title: book.title,
    category: book.category,
  }));
  dispatch({
    type: INITIALIZE_BOOKS,
    payload: data,
  });
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case INITIALIZE_BOOKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default reducer;
