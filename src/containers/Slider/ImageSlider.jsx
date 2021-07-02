import React from 'react';
import Slider from 'infinite-react-carousel';
import Slide from './Slide';
import imageAssets from '../../assets/assets';
import styled from 'styled-components';

const StyledSlidesContainer = styled.div`
  margin: auto;
  position: relative;
`;

export default function ImageSlider({ images, callback }) {
  const slides = images.map((image, idx) => (
    <Slide key={image} image={image} callback={() => callback()} />
  ));

  const rightChevImg = (
    <img
      style={{
        position: 'absolute',
        height: '35px',
        width: '20px',
        top: 'calc(50% - 15px)',
        right: '10px',
      }}
      src={imageAssets.rightChevron}
      alt="right"
    />
  );
  const leftChevImg = (
    <img
      style={{
        position: 'absolute',
        height: '35px',
        width: '20px',
        top: 'calc(50% - 15px)',
        left: '10px',
      }}
      src={imageAssets.leftChev}
      alt="left"
    />
  );

  return (
    <StyledSlidesContainer>
      <Slider prevArrow={leftChevImg} nextArrow={rightChevImg} dots>
        {slides}
      </Slider>
    </StyledSlidesContainer>
  );
}
