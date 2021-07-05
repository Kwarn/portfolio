import React from 'react';
import styled from 'styled-components';

const StyledAboutMeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledText = styled.p`
  margin: auto;
  width: 50%;
  color: #c5c6c7;
`;

export default function AboutMe() {
  return (
    <StyledAboutMeContainer>
      <StyledText>
        “A good programmer is someone who always looks both ways before crossing
        a one-way street.”
      </StyledText>
      <StyledText>
        A devout learner experienced in Full-stack development with a focus on
        front-end systems, utilizing popular modern frameworks & libraries
        whilst practising the latest generation of architecture and design
        principles to create responsive, scaleable, andinitiative web solutions.
      </StyledText>
    </StyledAboutMeContainer>
  );
}
