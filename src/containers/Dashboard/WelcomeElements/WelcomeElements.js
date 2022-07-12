import React, { useContext, useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import imageAssets from '../../../assets/assets';
import Spinner from '../../../components/UI/Spinner/Spinner';
import LayoutsContext from '../../../Layout/LayoutsContext';

const drawClose = keyframes`
  0%{
    width: 400px;
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    width: 0;
  }
`;

const drawOpen = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    opacity:1;
  }
  100%{
    width: 400px;
  }
`;

const drawCloseMobile = keyframes`
  0%{
    width: 85vw;
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
  100%{
    width: 0;
  }
`;

const drawOpenMobile = keyframes`
  0% {
    width: 0;
    opacity: 0;
  }
  50% {
    opacity:1;
  }
  100%{
    width: 85vw;
  }
`;

const drawCloseTextAnimation = keyframes`
  0%{
    opacity: 1;
    font-size: 3vh;
  }
  50%{
    font-size: 0em;
  }
  100%{
    opacity: 0;
  }
`;

const drawOpenTextAnimation = keyframes`
  0% {
    opacity: 0;
    font-size: 0em;
  }
  50% {
    opacity:1;
  }
  100% {
    font-size: 3vh;
  }
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 3vw;
  transition: left 0.5s;
  left: ${props => (props.isMenuOpen ? 'calc(50% - 7vh)' : '1vw')};
`;

const StyledWelcomeElementsContainer = styled.div`
  margin: 0 auto 0 auto;
  color: white;
  height: 100%;
  width: 100%;
  border-radius: 20%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const StyledProfileImage = styled.img`
  position: relative;
  margin: 0;
  z-index: 1;
  border-radius: 50%;
  border-right: 4px solid #0b0c10;
  border-bottom: 4px solid #0b0c10;
  height: ${props =>
    props.isMenuOpen ? '15vh' : props.isWelcomePage ? '15vh' : '5vh'};
  transition: height 0.5s;
  width: auto;
`;

const StyledDraw = styled.div`
  display: flex;
  animation: ${props =>
    props.isMobile
      ? props.isDrawOpen
        ? css`
            ${drawOpenMobile} 0.5s
          `
        : css`
            ${drawCloseMobile} 0.5s
          `
      : props.isDrawOpen
      ? css`
          ${drawOpen} 0.5s
        `
      : css`
          ${drawClose} 0.5s
        `};
  left: 2vw;
  top: 8px;
  width: ${props =>
    props.isDrawOpen ? (props.isMobile ? '85vw' : '400px') : '0px'};
  opacity: ${props => (props.isDrawOpen ? '1' : '0')};
  border-bottom: 4px solid #0b0c10;
  border-top: 4px solid #0b0c10;
  border-right: 2px solid #0b0c10;
  position: absolute;
  border-radius: 50px 20px 50px 50px;
  height: ${props => (props.isDrawOpen ? '12vh' : '8vh')};
  transition: height 0.4s;
  min-width: 100px;
  background: #c5c6c7;
`;

const StyledSpinnerWrapper = styled.div`
  margin: 5vh auto auto auto;
  z-index: 1;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const StyledImageToTextSpacer = styled.div`
  width: 5.5vw;
  min-width: 120px;
  height: 100%;
`;

const StyledTextGroup = styled.div`
  h1 {
    margin: 0;
    padding: 0;
  }
  p {
    margin-top: -2vh;
    padding: 0;
  }

  font-size: ${props => (props.isDrawOpen ? '3vh' : '0em')};
  mix-blend-mode: difference;
  margin: auto;
  animation: ${props =>
    props.isDrawOpen
      ? css`
          ${drawOpenTextAnimation} 1s
        `
      : css`
          ${drawCloseTextAnimation} 1s
        `};
`;

const WelcomeElements = ({ isMenuOpen, isWelcomePage }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDrawOpen, setIsDrawOpen] = useState(isWelcomePage);
  const layouts = useContext(LayoutsContext);

  useEffect(() => {
    setIsDrawOpen(isWelcomePage);
  }, [isWelcomePage]);

  const imageLoadedHandler = () => {
    setIsLoading(false);
  };

  const profileImage = (
    <StyledProfileImage
      // onMouseEnter={e => drawHandler(e, true)}
      // onMouseLeave={e => drawHandler(e, isWelcomePage)}
      isMenuOpen={isMenuOpen}
      isWelcomePage={isWelcomePage}
      onLoad={imageLoadedHandler}
      src={imageAssets.profileImage}
      alt="profileImage"
    />
  );

  // this is magic. even though img isn't in the render it still triggers its on-load.
  // react must be loading the image without rendering causing imageLoadedHander to be fired
  // as the image (size in KB) passed to both instances of img is the same, the loading time must be accurate?
  const img = document.createElement('img');
  img.src = imageAssets.profileImage;
  img.alt = 'profilepic';
  img.onload = imageLoadedHandler;

  return isLoading ? (
    <StyledSpinnerWrapper>
      <Spinner />
    </StyledSpinnerWrapper>
  ) : (
    <StyledWrapper isMenuOpen={isMenuOpen}>
      <StyledWelcomeElementsContainer>
        <StyledDraw {...layouts} isDrawOpen={isDrawOpen}>
          <StyledImageToTextSpacer />
          <StyledTextGroup isDrawOpen={isDrawOpen}>
            <h1>Hi I'm Karl,</h1>
            <p>A Full-Stack Web Developer</p>
          </StyledTextGroup>
        </StyledDraw>
        {profileImage}
      </StyledWelcomeElementsContainer>
    </StyledWrapper>
  );
};

export default WelcomeElements;
