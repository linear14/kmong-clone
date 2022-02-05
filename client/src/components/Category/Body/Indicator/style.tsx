import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RouterBox = styled(Link)`
  min-width: 36px;
  height: 36px;
  padding: 0px 8px;
  border-radius: 4px;
  text-align: center;
  vertical-align: middle;
  line-height: 36px;
  font-size: 14px;
  font-weight: 400;
  color: #9a9ba7;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #f3f3f3;
  }
`;
