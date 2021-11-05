import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BooksPage from './Homepage';
import CategoriesPage from '../redux/categories/categories';
import Header from './Header';

const App = () => {
  const { booksReducer } = useSelector((state) => state);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <BooksPage data={booksReducer} />
          </Route>
          <Route path="/categories">
            <CategoriesPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
