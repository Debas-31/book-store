import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BooksPage from '../redux/books/books';
import CategoriesPage from '../redux/categories/categories';
import Header from './Header';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route exact path="/" element={<BooksPage />} />
      <Route exact path="/categories" element={<CategoriesPage />} />
    </Routes>
  </>
);

export default App;
