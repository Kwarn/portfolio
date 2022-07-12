import React from 'react';
import imageAssets from '../../../assets/assets';
import FileSaver from 'file-saver';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto 10px auto;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 4px solid #c5c6c7;
`;

const StyledLink = styled.a`
  z-index: 101;
  cursor: pointer;
  &:hover {
    animation: ${animation} 1s;
  }
`;

const StyledImage = styled.img`
  width: auto;
  height: 40px;
  cursor: pointer;
  &:hover {
    animation: ${animation} 1s;
  }
`;

export default function ProfileLinks({ isMenuOpen }) {
  const saveFile = () =>
    FileSaver.saveAs(
      process.env.PUBLIC_URL + '/resource/Karl_Warner_CV.pdf',
      'Karl_Warner_CV.pdf'
    );
  return (
    <StyledWrapper>
      <StyledLink
        href="https://github.com/Kwarn/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledImage src={imageAssets.gitHubLight} alt="gitHubIcon" />
      </StyledLink>
      <StyledLink
        href="https://www.linkedin.com/in/karl-warner-9147661b5/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledImage src={imageAssets.linkedInLight} alt="linkedInIcon" />
      </StyledLink>
      <StyledImage
        onClick={saveFile}
        small={true}
        src={imageAssets.cvIcon}
        alt="download CV"
      />
    </StyledWrapper>
  );
}
