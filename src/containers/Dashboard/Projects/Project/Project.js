import React, { useState } from 'react';
import imageAssets from '../../../../assets/assets';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  animation-duration: 2s;
  background-color: #c5c6c7;
  overflow: hidden;
  box-shadow: 0 0 3px 3px #0b0c10 inset;
`;

const StyledGrid = styled.div`
  margin: 50px 50px 20px 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px 1fr 40px 30px 1fr 40px;
  gap: 45px 35px;

  @media (max-width: 550px) {
    margin: 25px;
    gap: 15px 15px;
    grid-template-rows: 40px 8vh 40px 30px 1fr 40px;
  }
`;

const StyledCloseIconBlock = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 5;
  grid-column-end: 6;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  justify-content: center;
`;

const StyledCloseIconImage = styled.img`
  width: 40px;
  height: auto;
  transform: rotate(-90deg);
  top: 20vh;
  left: 20vw;
  cursor: pointer;
  margin: 0 0 auto auto;
  @media (max-width: 550px) {
    width: 25px;
    height: 25px;
  }
`;

const StyledTechIconsBlock = styled.div`
  width: 100%;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: row;
  justify-content: left;
  @media (max-width: 900px) {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    justify-content: center;
  }
  @media (max-width: 550px) {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 1;
    grid-column-end: 6;
    justify-content: left;
  }
  overflow: hidden;
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
  @media (max-width: 550px) {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 4;
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
  font-family: 'Courier New';
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 4;
  grid-row-end: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: pre-line;
  @media (max-width: 900px) {
    grid-row-start: 5;
    grid-row-end: 6;
  }
`;
const StyledMainContentText = styled.p`
  @media (min-width: 1800px) {
    font-size: 1.2vw;
  }
  @media (max-width: 1799px) {
    font-size: 1.5vw;
  }
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 550px) {
    font-size: 12px;
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
  @media (max-width: 550px) {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 4;
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
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    grid-row-start: 4;
    grid-row-end: 5;
  }
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

const StyledChevronBlock = styled.div`
  margin: auto auto 0 auto;
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 6;
  grid-row-end: 7;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledChevron = styled.img`
  margin: auto 10px 0 10px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  transform: ${props => (props.right ? 'rotate(-90deg)' : 'rotate(90deg)')};
  @media (max-width: 550px) {
    width: 25px;
    height: 25px;
  }
`;

const StyledPageCounter = styled.h3`
  margin: auto 10px auto 10px;
  padding: 0;
  font-size: 1.5em;
  @media (max-width: 550px) {
    font-size: 1em;
  }
`;

const Project = ({
  index,
  project,
  showModalCb,
  backToProjectsCb,
  switchProjectCb,
}) => {
  const [isDescription, setIsDescription] = useState(true);

  const config = { trackMouse: true, preventDefault: true, delta: 100 };
  const handlers = useSwipeable({
    onSwipedLeft: () => switchProjectCb('left'),
    onSwipedRight: () => switchProjectCb('right'),
    ...config,
  });

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
      <StyledGrid {...handlers}>
        <StyledChevronBlock>
          <StyledChevron
            src={imageAssets.blackDownArrow}
            left
            onClick={() => switchProjectCb('left')}
          />
          <StyledPageCounter>{`${index + 1}/7`}</StyledPageCounter>
          <StyledChevron
            src={imageAssets.blackDownArrow}
            right
            onClick={() => switchProjectCb('right')}
          />
        </StyledChevronBlock>
        <StyledTechIconsBlock>{techIcons}</StyledTechIconsBlock>
        <StyledCloseIconBlock>
          <StyledCloseIconImage
            onClick={backToProjectsCb}
            src={imageAssets.blackCross}
            alt="backToProjectsArrow"
          />
        </StyledCloseIconBlock>

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
