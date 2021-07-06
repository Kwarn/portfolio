import React from 'react';
import styled from 'styled-components';
import imageAssets from '../../../assets/assets';

const StyledAboutMeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #c5c6c7;
`;

const StyledQuote = styled.p`
  margin: 15vh auto auto auto;
  width: 50%;
`;

const StyledText = styled.p`
  margin: auto;
  width: 50%;
`;

const StyledHeader = styled.h1`
  font-size: 15vw;
  margin-left: 5vw;
`;

export default function AboutMe() {
  return (
    <StyledAboutMeContainer>
      <StyledQuote>
        {`“A good programmer is someone who always looks
         both ways before crossing a one-way street.” - Some bloke`}
      </StyledQuote>
      <StyledHeader>HELLO</StyledHeader>
      <StyledText>
        A devout learner experienced in Full-stack development with a focus on
        front-end systems, utilizing popular modern frameworks & libraries
        whilst practising the latest generation of architecture and design
        principles to create responsive, scaleable, and initiative web
        solutions.
      </StyledText>
      <StyledText></StyledText>
    </StyledAboutMeContainer>
  );
}
