import React from 'react';
import styled from 'styled-components';

const StyleTextWrap = styled.p`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-shadow:
    -2px 0 #1e2c5f,
    0 2px #1e2c5f,
    2px 0 #ed1b24,
    0 -2px #ed1b24;
`;

const StyleText = ({ children }: { children: React.ReactNode }) => {
  return <StyleTextWrap>{children}</StyleTextWrap>;
};

export default StyleText;
