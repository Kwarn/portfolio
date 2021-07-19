import React, { useContext, useState } from 'react';
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

const StyledQuoteContainer = styled.div`
  cursor: pointer;
  position: absolute;
  top: 20vh;
  font-size: 2vh;
  mix-blend-mode: exclusion;
  margin: auto auto auto 25vw;
  width: 60%;
  display: flex;
  justify-content: center;
`;

const StyledQuote = styled.p`
  margin: auto auto auto auto;
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
  white-space: pre-line;
  @media (max-width: 700px) {
    font-size: 1em;
  }
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
  const [quotesIndex, setQuotesIndex] = useState(0);
  const layouts = useContext(LayoutsContext);
  const background = imageAssets.welcomeBackground;

  const quotes = [
    'A good programmer is someone who always looks both ways before crossing a one-way street.',
    'I have not failed. I’ve just found 10,000 ways that won’t work.',
    'Knock, knock … Who’s there? … *very long pause* … Java.',
    'Linux is only free if your time has no value.',
    'The computer was born to solve problems that did not exist before.',
    'Why do Java programmers have to wear glasses? Because they don’t C#.',
    'Some people when confronted with a problem think, “I know, I’ll use regular expressions.” Now they have two problems.',
    'I have always wished that my computer would be as easy to use as my telephone. My wish has come true. I no longer know how to use my telephone.',
  ];

  // const aboutMe = `I'm an enthusiastic learner experienced in full-stack development, able
  //       to utilize popular modern languages, frameworks, libraries and design
  //       principles to create the latest generation of responsive, scalable, and
  //       innovative web solutions.`;

  const aboutMe = `As a technical and mechanical enthusiast from a young age, I'm drawn to understanding how things work and thrive on pursuing the solutions when they don't!
                  Curiosity has led me to understand a broad range of technologies and I'm eager to continue my journey within a skilled team, to which I can contribute and grow with.`;

  return (
    <StyledAboutMeContainer>
      <StyledBackground {...layouts} background={background} />
      <StyledQuoteContainer>
        <StyledQuote
          onClick={() => {
            if (quotesIndex === quotes.length - 1) setQuotesIndex(0);
            else setQuotesIndex(prev => prev + 1);
          }}
        >
          "{quotes[quotesIndex]}"
        </StyledQuote>
      </StyledQuoteContainer>
      <StyledHeader {...layouts}>HELLO</StyledHeader>
      <StyledAboutMeText {...layouts}>{aboutMe}</StyledAboutMeText>
      <StyledSwipeScrollElements>
        {layouts.isDesktop ? <StyledScrollText>SCROLL</StyledScrollText> : ''}
        <StyledUpArrow {...layouts} src={imageAssets.upArrow} alt="uparrow" />
        {!layouts.isDesktop ? <StyledScrollText>SWIPE</StyledScrollText> : ''}
      </StyledSwipeScrollElements>
    </StyledAboutMeContainer>
  );
}
