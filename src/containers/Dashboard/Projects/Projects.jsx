import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { smallProjects, bigProjects } from './ProjectData';
import Project from './Project/Project';
import LayoutsContext from '../../../Layout/LayoutsContext';
import imageAssets from '../../../assets/assets';

const StyledWrapper = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  background-image: url(${props => props.background});
  background-size: cover;
`;

const StyledContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: ${props =>
    props.windowInnerWidth > 1500
      ? '100px'
      : props.windowInnerWidth > 1000
      ? '40px'
      : '25px'};
  font-family: 'Teko';
  background-image: url(${props => props.background});
`;

const StyledGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: ${props =>
    props.windowInnerWidth > 900 ? '1fr 1fr 1fr 1fr 1fr' : '1fr 1fr'};
  grid-template-rows: ${props =>
    props.windowInnerWidth > 900
      ? '1fr 1fr 1fr 1fr 1fr 1fr'
      : '1fr 1fr 1fr 1fr 1fr 1fr'};
  gap: ${props =>
    props.windowInnerWidth > 1300
      ? '20px 10px'
      : props.windowInnerWidth > 1000
      ? '15px 10px'
      : '15px 10px'};
`;

const StyledProjectTile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  grid-column-start: ${props => props.colStart};
  grid-column-end: ${props => props.colEnd};
  grid-row-start: ${props => props.rowStart};
  grid-row-end: ${props => props.rowEnd};
  /* border-radius: 15px; */
  box-shadow: 0 0px 8px #c5c6c7;
  cursor: pointer;
`;

const StyledFadeEffect = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  opacity: ${props => (props.isFocus ? '0' : '1')};
  transition: opacity 1s;
  background: linear-gradient(to top, black, 60%, transparent 100%);
`;

const StyledTextWrapper = styled.div`
  color: #c5c6c7;
  position: absolute;
  bottom: 0;
  z-index: 10;
  margin: 1vh;
  transition: opacity 1s;
  opacity: ${props => (props.isFocus ? '0' : '1')};
`;

const StyledProjectTitle = styled.div`
  font-size: 4vh;
`;

const StyledTechList = styled.p`
  font-size: 2vh;
`;

const StyledImage = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
`;

const StyledProjectsHeaderTile = styled.div`
  z-index: 1000;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  grid-column-start: ${props => props.colStart};
  grid-column-end: ${props => props.colEnd};
  grid-row-start: ${props => props.rowStart};
  grid-row-end: ${props => props.rowEnd};
`;

const StyledProjectsHeader = styled.h1`
  color: #c5c6c7;
  margin: auto;
  font-size: 6vh;
`;

function Projects({ showModalCb, closeModalCb }) {
  const [focusedTileIndex, setFocusedTileIndex] = useState(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const layouts = useContext(LayoutsContext);

  useEffect(() => {
    setActiveProjectIndex(null);
  }, []);

  // returns JSX Main Content element.
  const createProjectElement = project => {
    return (
      <div key={project.title}>
        <Project
          project={project}
          showModalCb={content => showModalCb(content)}
          closeModalCb={closeModalCb}
          backToProjectsCb={() => setActiveProjectIndex(null)}
        />
      </div>
    );
  };

  const projectTiles = [];
  const FullProjectElements = [];
  let index = 0;

  if (layouts.windowInnerWidth > 900) {
    projectTiles.push(
      <StyledProjectsHeaderTile
        key="projectsHeaderTile"
        rowStart={1}
        rowEnd={5}
        colStart={1}
        colEnd={2}
      >
        <StyledProjectsHeader>Projects</StyledProjectsHeader>
      </StyledProjectsHeaderTile>
    );
  } else {
    projectTiles.push(
      <StyledProjectsHeaderTile
        key="projectsHeaderTile"
        rowStart={4}
        rowEnd={5}
        colStart={1}
        colEnd={2}
      >
        <StyledProjectsHeader>Projects</StyledProjectsHeader>
      </StyledProjectsHeaderTile>
    );
  }

  const createProjectTile = (
    idx,
    project,
    title,
    image,
    techList,
    { rowStart, rowEnd, colStart, colEnd }
  ) => {
    FullProjectElements.push(createProjectElement(project));
    projectTiles.push(
      <StyledProjectTile
        key={title}
        rowStart={rowStart}
        rowEnd={rowEnd}
        colStart={colStart}
        colEnd={colEnd}
        onClick={e => setActiveProjectIndex(idx)}
        onMouseEnter={() => setFocusedTileIndex(idx)}
        onMouseLeave={() => setFocusedTileIndex(null)}
      >
        <StyledTextWrapper isFocus={focusedTileIndex === idx}>
          <StyledProjectTitle>{title}</StyledProjectTitle>
          <StyledTechList>{techList}</StyledTechList>
        </StyledTextWrapper>
        <StyledImage src={image} alt={title} />
        <StyledFadeEffect isFocus={focusedTileIndex === idx} />
      </StyledProjectTile>
    );
  };

  let bigRowStart = 1,
    bigRowEnd = 5,
    bigColStart = 2,
    bigColEnd = 4;

  if (layouts.windowInnerWidth < 900) {
    bigColStart = 1;
    bigColEnd = 2;
    bigRowStart = 1;
    bigRowEnd = 4;
  }

  for (const project in bigProjects) {
    const proj = bigProjects[project];
    const title = bigProjects[project].title;
    const image = bigProjects[project].images[0];
    const techList = bigProjects[project].previewTechStack.split(',').join(' ');
    const i = index;
    createProjectTile(i, proj, title, image, techList, {
      rowStart: bigRowStart,
      rowEnd: bigRowEnd,
      colStart: bigColStart,
      colEnd: bigColEnd,
    });

    if (layouts.windowInnerWidth < 900) {
      bigColStart += 1;
      bigColEnd += 1;
    } else {
      bigColStart += 2;
      bigColEnd += 2;
    }
    index++;
  }

  let smallRowStart = 5,
    smallRowEnd = 7,
    smallColStart = 1,
    smallColEnd = 2;

  if (layouts.windowInnerWidth < 900) {
    smallRowStart = 4;
    smallRowEnd = 5;
    smallColStart = 2;
    smallColEnd = 3;
  }

  for (const project in smallProjects) {
    const proj = smallProjects[project];
    const title = smallProjects[project].title;
    const image = smallProjects[project].images[0];
    const techList = smallProjects[project].previewTechStack
      .split(',')
      .join(' ');
    const i = index;
    createProjectTile(i, proj, title, image, techList, {
      rowStart: smallRowStart,
      rowEnd: smallRowEnd,
      colStart: smallColStart,
      colEnd: smallColEnd,
    });
    if (layouts.windowInnerWidth < 900) {
      if (index % 2 === 0) {
        smallColStart = 1;
        smallColEnd = 2;
        smallRowStart++;
        smallRowEnd++;
      } else {
        smallColStart++;
        smallColEnd++;
      }
    } else {
      smallColStart++;
      smallColEnd++;
    }
    index++;
  }

  const FullProject = FullProjectElements[activeProjectIndex] || null;

  return (
    <StyledWrapper background={imageAssets.codeImage}>
      <StyledContainer {...layouts}>
        {FullProject || <StyledGrid {...layouts}>{projectTiles}</StyledGrid>}
      </StyledContainer>
    </StyledWrapper>
  );
}

export default React.memo(Projects);
