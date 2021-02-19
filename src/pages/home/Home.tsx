import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #7f7f7f;
  text-align: center;
`;

const StyledText = styled.p`
  color: black; 
`;
const Home = () => {
  return (
    <StyledDiv>
      <StyledText>welcome home</StyledText>
    </StyledDiv>
  );
};

export default Home;
