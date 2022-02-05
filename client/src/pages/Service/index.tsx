import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Service = () => {
  const { serviceIdx } = useParams();
  return <div>{serviceIdx}</div>;
};

export default Service;
