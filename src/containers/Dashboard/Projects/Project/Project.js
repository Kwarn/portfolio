import React, { useState } from 'react';
import imageAssets from '../../../../assets/assets';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  animation-duration: 2s;
  background-color: #c5c6c7;
  overflow: hidden;
  box-shadow: 0 0 12px 12px #0b0c10 inset;
`;

const StyledGrid = styled.div`
  margin: 70px 70px 20px 70px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px 1fr 1fr 1fr 40px;
  gap: 45px 35px;

  @media (max-width: 900px) {
    margin: 30px;
    gap: 25px 15px;
  }
`;

const StyledBackArrowBlock = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  justify-content: center;
`;

const StyledBackArrowImage = styled.img`
  width: 5vh;
  height: 5vh;
  transform: rotate(-90deg);
  top: 20vh;
  left: 20vw;
  cursor: pointer;
  margin: 0 0 auto auto;
`;

const StyledTechIconsBlock = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: row;
  flex: 1;
  @media (max-width: 900px) {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`;

const StyledTechIcon = styled.img`
  margin: auto 5px auto 5px;
  max-width: 40px;
  padding: 0;
  @media (max-width: 900px) {
    max-width: 30px;
  }
`;

const StyledTitleGroupBlock = styled.div`
  grid-column-start: 2;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  @media (max-width: 900px) {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
const StyledProjectTitle = styled.h1`
  margin: auto;
  @media (min-width: 1800px) {
    font-size: 4vw;
  }
  @media (max-width: 1799px) {
    font-size: 6vw;
  }
  @media (max-width: 900px) {
    font-size: 7vw;
  }
`;
const StyledExternalLinksWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: auto;
  @media (min-width: 1800px) {
    font-size: 2vw;
  }
  @media (max-width: 1799px) {
    font-size: 3vw;
  }
  @media (max-width: 900px) {
    font-size: 4vw;
  }
`;
const StyledExternalLink = styled.a`
  text-decoration: underline;
  color: inherit;
  margin: auto 10px auto 10px;
`;

const StyledMainContentTextBlock = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 3;
  grid-row-end: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: pre-line;
`;
const StyledMainContentText = styled.p`
  @media (min-width: 1800px) {
    font-size: 1.5vw;
  }
  @media (max-width: 1799px) {
    font-size: 2vw;
  }
  @media (max-width: 900px) {
    font-size: 3vw;
  }
  @media (max-width: 550px) {
    font-size: 4vw;
  }
  margin: auto;
`;

const StyledProjectImagesBlock = styled.div`
  font-size: 1em;
  position: relative;
  z-index: 0;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  @media (max-width: 900px) {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;
const StyledViewImagesText = styled.h2`
  font-size: 2vw;
  position: absolute;
  color: white;
  bottom: 0;
  left: 10px;
  z-index: 2;
`;
const StyledProjectImage = styled.img`
  margin: 0 auto auto auto;
  width: 100%;
  object-position: top;
  object-fit: cover;
`;
const StyledFadeEffect = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(to top, black, transparent 70%, transparent 100%);
`;

const StyledSwitchContentBlock = styled.div`
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 5;
  grid-row-end: 6;
  display: flex;
  justify-content: center;
`;
const StyledContentSwitchButton = styled.button`
  color: #c5c6c7;
  cursor: pointer;
  margin: auto;
  padding: 5px;
  width: fit-content;
  height: fit-content;
  background: #0b0c10;
  @media (min-width: 1800px) {
    font-size: 1vw;
  }
  @media (max-width: 1799px) {
    font-size: 1.5vw;
  }
  @media (max-width: 900px) {
    font-size: 3vw;
  }
`;

const Project = ({ project, showModalCb, closeModalCb, backToProjectsCb }) => {
  const [isDescription, setIsDescription] = useState(true);

  const imageTags = project.previewTechStack
    .split(',')
    .map(tag => tag.toLowerCase().trim());

  const techIcons = imageTags.map(tag =>
    imageAssets[tag] ? (
      <StyledTechIcon key={tag} src={imageAssets[tag]} alt={tag} />
    ) : null
  );

  const externalLinks = (
    <>
      {project.liveDemoLink ? (
        <StyledExternalLink
          href={project.liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </StyledExternalLink>
      ) : null}
      {project.gitHubLink ? (
        <StyledExternalLink
          href={project.gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub-Repo
        </StyledExternalLink>
      ) : null}
    </>
  );

  const descriptionBlockContent = isDescription ? (
    <StyledMainContentText>{project.description}</StyledMainContentText>
  ) : (
    <StyledMainContentText>{project.technicalPractices}</StyledMainContentText>
  );

  return (
    <StyledWrapper>
      <StyledGrid>
        <StyledTechIconsBlock>{techIcons}</StyledTechIconsBlock>
        <StyledBackArrowBlock>
          <StyledBackArrowImage
            onClick={backToProjectsCb}
            src={imageAssets.upArrow}
            alt="backToProjectsArrow"
          />
        </StyledBackArrowBlock>

        <StyledTitleGroupBlock>
          <StyledProjectTitle>{project.title}</StyledProjectTitle>
          <StyledExternalLinksWrapper>
            {externalLinks}
          </StyledExternalLinksWrapper>
        </StyledTitleGroupBlock>

        <StyledMainContentTextBlock>
          {descriptionBlockContent}
        </StyledMainContentTextBlock>

        <StyledProjectImagesBlock
          onClick={() =>
            showModalCb({
              isShown: true,
              content: project.images,
            })
          }
        >
          <StyledFadeEffect />
          <StyledViewImagesText>View images</StyledViewImagesText>
          <StyledProjectImage src={project.images[0]} alt="project" />
        </StyledProjectImagesBlock>
        <StyledSwitchContentBlock>
          <StyledContentSwitchButton
            onClick={() => setIsDescription(!isDescription)}
          >{`Show ${
            isDescription ? 'Technical Info' : 'Description'
          }`}</StyledContentSwitchButton>
        </StyledSwitchContentBlock>
      </StyledGrid>
    </StyledWrapper>
  );
};

export default Project;
