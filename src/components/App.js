import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';
import Header from './Header';
import getBookData from './apis/bookApi';

const data = async () => {
  const value = await getBookData();
  console.log(value)
}

data();

const App = () => (
  <div className="top-container">
    <Header />
    <Routes>
      <Route exact path="/" element={<Books />} />
      <Route exact path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
