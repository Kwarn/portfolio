import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import imageAssets from '../../../assets/assets';
import LayoutsContext from '../../../Layout/LayoutsContext';

const StyledAboutMeContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #c5c6c7;
  overflow: hidden;
  background-color: #c5c6c7;
`;

const StyledQuote = styled.p`
  position: absolute;
  top: 20vh;
  font-size: 2vh;
  mix-blend-mode: exclusion;
  margin: auto auto auto 25vw;
  width: 60%;
`;

const StyledHeader = styled.h1`
  mix-blend-mode: difference;
  color: #c5c6c7;
  z-index: 1;
  position: absolute;
  font-size: ${props => (props.isMobile ? '20vw' : '15vw')};
  margin-left: 7vw;
`;

const StyledSwipeScrollElements = styled.div`
  bottom: 10vh;
  left: 7vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
`;

const StyledUpArrow = styled.img`
  width: 10vw;
  height: 10vw;
  transform: rotate(0deg);
  transform: ${props => (props.isDesktop ? `rotate(180deg)` : '')};
`;

const StyledScrollText = styled.h1`
  font-size: 3vh;
  color: #0b0c10;
  margin: auto;
`;

const StyledAboutMeText = styled.p`
  color: #0b0c10;
  font-size: 2.5vh;
  z-index: 1;
  margin: ${props =>
    props.isMobile ? 'auto auto 2vh 30vw' : 'auto auto 10vh 25vw'};
  width: 60%;
`;

const StyledBackground = styled.div`
  position: absolute;
  z-index: 0;
  left: 7vw;
  top: 0;
  background: #0b0c10;
  height: 59vh;
  width: 100%;
  background-image: url(${props => props.background});
  background-size: cover;
`;

export default function Welcome() {
  const layouts = useContext(LayoutsContext);
  const background = imageAssets.welcomeBackground;
  return (
    <StyledAboutMeContainer>
      <StyledBackground {...layouts} background={background} />
      <StyledQuote>
        "A good programmer is someone who always looks both ways before crossing
        a one-way street.”
      </StyledQuote>
      <StyledHeader {...layouts}>HELLO</StyledHeader>
      <StyledAboutMeText {...layouts}>
        I'm an enthusiastic learner experienced in full-stack development, able
        to utilize popular modern languages, frameworks, libraries and design
        principles to create the latest generation of responsive, scalable, and
        innovative web solutions.
      </StyledAboutMeText>
      <StyledSwipeScrollElements>
        {layouts.isDesktop ? <StyledScrollText>SCROLL</StyledScrollText> : ''}
        <StyledUpArrow {...layouts} src={imageAssets.upArrow} alt="uparrow" />
        {!layouts.isDesktop ? <StyledScrollText>SWIPE</StyledScrollText> : ''}
      </StyledSwipeScrollElements>
    </StyledAboutMeContainer>
  );
}
