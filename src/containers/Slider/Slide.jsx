import React, { useContext } from 'react';
import styled from 'styled-components';

const StyledSlide = styled.li`
  height: 40vh;
  position: relative;
  display: flex;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  margin: auto;
`;

const StyledContentWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transition: 0.3s ease-in-out;
  bottom: 0;
  left: calc(50% - (50% / 2));
  color: white;
  width: 80%auto;
  background-color: ${props =>
    props.isImageDark ? 'rgba(225, 225, 225, 0.5)' : 'rgba(0, 0, 0, 0.5)'};

  &:hover:hover {
    cursor: pointer;
  }
`;

const StyledProductUnderline = styled.img`
  margin: auto auto 10px auto;
  width: 150px;
  height: 20px;
`;

const StyledFullImages = styled.p`
  text-decoration: underline;
  text-align: center;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  display: flex;
  top: 0;
  right: -15px;
  width: 150px;
  height: 20px;
  font-size: ${props => (props.isMobile ? '0.8em' : '1em')};
`;

const Slide = ({ image, showModalCb }) => {
  return (
    <>
      <StyledSlide background={image}>
        <StyledContentWrapper onClick={showModalCb}>
          <StyledFullImages>See Full Images</StyledFullImages>
        </StyledContentWrapper>
      </StyledSlide>
    </>
  );
};

export default Slide;
