import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Footer, Header } from './components/common';
import Category from './pages/Category';
import Service from './pages/Service';
import Home from './pages/Home';

const Body = styled.div`
  width: 100%;
  min-width: 1170px;
  position: relative;

  display: flex;
  justify-content: center;
`;

const App = () => {
  return (
    <>
      <Header />
      <Body>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:categoryIdx' element={<Category />} />
          <Route path='/service/:serviceIdx' element={<Service />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Body>
      <Footer />
    </>
  );
};

export default App;
