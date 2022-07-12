import React, { useState } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styled from 'styled-components';
import imageAssets from '../../../assets/assets';

import { useSwipeable } from 'react-swipeable';

const StyledModal = styled.div`
  margin-left: 5%;
  transform: ${props =>
    props.isShown ? 'translateY(0)' : 'translateY(-100vh)'};
  opacity: ${props => (props.isShown ? '1' : '0')};
  z-index: 500;
  position: fixed;
  background-color: #fff;
  width: 90%;
  height: 100%;
  max-height: 90%;
  top: 5vh;
  padding: 1px;
  box-sizing: border-box;
  transition: all 0.3s ease-in;
  @media (max-width: 700px) {
    width: 85%;
  }
`;

const StyledCloseIcon = styled.img`
  z-index: 1000;
  position: absolute;
  top: -35px;
  right: -35px;
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: auto;
  height: 100%;
`;

const StyledMainImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  text-align: center;
`;

const StyledMainImage = styled.div`
  background-image: url(${({ background }) => background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: auto;
  /* border: 3px solid #474747 */
`;

const StyledThumbnailWrapper = styled.div`
  margin: auto;
  width: 100%;
  height: fit-content;
`;

const StyledThumbnail = styled.img`
  border: ${props => (props.isFocus ? '2px solid green' : 'none')};
  width: 60px;
  height: 60px;
  margin: 5px;
  cursor: pointer;
`;

const StyledSwipeIcon = styled.img`
  position: absolute;
  bottom: 50px;
  left: calc(50% - 35px);
  width: 70px;
  height: 70px;
`;

const Modal = ({ isVisible, closeFn, children }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  let images = [];
  let thumbnails = [];
  const isMultipleImages = children
    ? Object.keys(children).length > 1
      ? true
      : false
    : false;

  // probably shouldn't do this, feels hacky.
  if (isVisible) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }
  if (children) {
    images = Array.from(children);
    thumbnails = images.map((image, idx) => (
      <StyledThumbnail
        onClick={() => setMainImageIndex(idx)}
        key={`modal-image-${idx}`}
        src={image}
        alt={`modal-${idx}`}
        isFocus={mainImageIndex === idx}
      />
    ));
  }

  const goRight = () => {
    if (mainImageIndex === images.length - 1) {
      setMainImageIndex(0);
    } else {
      setMainImageIndex(mainImageIndex + 1);
    }
  };

  const goLeft = () => {
    if (mainImageIndex === 0) {
      setMainImageIndex(images.length - 1);
    } else {
      setMainImageIndex(mainImageIndex - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => goRight(),
    onSwipedRight: () => goLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const imageResetHelperFn = () => {
    setMainImageIndex(0);
  };

  return (
    <>
      <Backdrop
        isShown={isVisible}
        closeFn={closeFn}
        imageResetFn={imageResetHelperFn}
      />
      <StyledModal {...handlers} isShown={isVisible} closeFn={closeFn}>
        <StyledCloseIcon
          onClick={() => {
            imageResetHelperFn();
            closeFn();
          }}
          src={imageAssets.closeIcon}
          alt="close modal"
        />
        <StyledContent>
          <StyledMainImageWrapper>
            <StyledMainImage background={images[mainImageIndex]} />
            {isMultipleImages ? (
              <StyledSwipeIcon src={imageAssets.swipeIcon} alt="Swipe" />
            ) : (
              ''
            )}
          </StyledMainImageWrapper>
          {isMultipleImages ? (
            thumbnails ? (
              <StyledThumbnailWrapper>{thumbnails}</StyledThumbnailWrapper>
            ) : null
          ) : null}
        </StyledContent>
      </StyledModal>
    </>
  );
};

export default React.memo(Modal);
