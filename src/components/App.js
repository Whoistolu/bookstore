import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BooksPage from '../redux/books/books';
import CategoriesPage from '../redux/categories/categories';
import Header from './Header';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <BooksPage />
      </Route>
      <Route exact path="/categories">
        <CategoriesPage />
      </Route>
    </Switch>
  </>
);

export default App;
