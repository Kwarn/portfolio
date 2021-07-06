import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import imageAssets from '../../../assets/assets';
import Spinner from '../../../components/UI/Spinner/Spinner';

const drawClose = keyframes`
  0%{
    width: 300px;
  }100%{
    width: 0;
  } 
`;

const drawOpen = keyframes`
0% {
  width: 100px;
}100%{
  width: 300px;
}
`;

const StyledWrapper = styled.div`
  margin: 0 auto 0 auto;
  height: 100%;
`;

const StyledWelcomeElementsContainer = styled.div`
  position: relative;
  margin: 0 auto 0 auto;
  color: white;
  height: 100%;
  width: 100%;
  border-radius: 20%;
  display: inline-flex;
  text-align: center;
`;

const StyledDraw = styled.div`
  animation: ${props =>
    props.isDrawOpen
      ? css`
          ${drawOpen} 1s
        `
      : css`
          ${drawClose} 1s
        `};
  position: absolute;
  left: 25px;
  top: 40px;
  width: ${props => (props.isDrawOpen ? '300px' : '0')};
  border-bottom: 4px solid #0b0c10;
  border-top: 4px solid #0b0c10;

  position: absolute;
  border-radius: 50px 20px 50px 50px;
  height: 130px;
  min-width: 100px;
  background: #c5c6c7;
  display: flex;
`;

const StyledProfileImage = styled.img`
  margin: auto;
  z-index: 1;
  border-radius: 50%;
  /* border-right: 4px solid #474747;
  border-bottom: 4px solid #474747; */
  border: ${props =>
    props.isDrawOpen ? '4px solid #0b0c10' : '4px solid #c5c6c7'};
  height: 158px;
  width: auto;
`;

const StyledSpinnerWrapper = styled.div`
  margin: auto;
  z-index: 1;
  width: 158px;
  height: auto;
  display: flex;
  justify-content: center;
`;

const StyledTextGroup = styled.div`
  mix-blend-mode: difference;
  font-size: 1em;
  margin: auto 15px auto auto;
`;

const StyledName = styled.h1``;

const StyledTagline = styled.p``;

const WelcomeElements = ({ isDrawOpen }) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageLoadedHandler = () => {
    setIsLoading(false);
  };

  const profileImage = (
    <StyledProfileImage
      isDrawOpen={isDrawOpen}
      onLoad={imageLoadedHandler}
      src={imageAssets.profileImage}
      alt="profileImage"
    />
  );

  // this is magic. even though img isn't in the render it still triggers its on-load.
  // react must be loading the image without rendering causing imageLoadedHander to be fired
  // as the image passed to both instances of img is the same, the loading time must be accurate?
  const img = document.createElement('img');
  img.src = imageAssets.profileImage;
  img.alt = 'profilepic';
  img.onload = imageLoadedHandler;

  return isLoading ? (
    <StyledSpinnerWrapper>
      <Spinner />
    </StyledSpinnerWrapper>
  ) : (
    <StyledWrapper>
      <StyledWelcomeElementsContainer>
        <StyledDraw isDrawOpen={isDrawOpen}>
          <StyledTextGroup>
            <StyledName>Karl Warner</StyledName>
            <StyledTagline>{`</> Full-Stack Web Developer`}</StyledTagline>
          </StyledTextGroup>
        </StyledDraw>
        {profileImage}
      </StyledWelcomeElementsContainer>
    </StyledWrapper>
  );
};

export default WelcomeElements;
