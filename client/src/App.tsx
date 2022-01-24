import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Category from './pages/Category';
import { Header, Body, FooterContainer } from './pages/common';
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <Body>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:categoryIdx' element={<Category />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Body>
      <FooterContainer />
    </>
  );
};

export default App;
