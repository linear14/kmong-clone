import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Category from './pages/Category';
import { Header, Body, Footer } from './pages/common';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <Body>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category' element={<Category />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Body>
      <Footer />
    </>
  );
};

export default App;
