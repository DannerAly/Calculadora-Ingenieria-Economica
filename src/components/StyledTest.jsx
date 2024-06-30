// src/StyledTest.js
import React from 'react';
import styled from 'styled-components';

const TestDiv = styled.div`
  background-color: lightblue;
  padding: 20px;
  border-radius: 5px;
`;

const StyledTest = () => {
  return (
    <TestDiv>
      Este es un componente estilizado con styled-components.
    </TestDiv>
  );
};

export default StyledTest;
