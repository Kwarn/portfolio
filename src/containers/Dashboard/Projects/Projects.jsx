import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import projectData from './ProjectData';
import Project from './Project/Project';
import LayoutsContext from '../../../Layout/LayoutsContext';
import imageAssets from '../../../assets/assets';

const StyledWrapper = styled.div`
  display: flex;
  margin: auto;
  height: 100vh;
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
    props.windowInnerWidth > 1300 ? '1fr 1fr 1fr 1fr' : '1fr 1fr'};
  grid-template-rows: ${props =>
    props.windowInnerWidth > 1300 ? '1fr 1fr' : '1fr 1fr 1fr 1fr'};
  gap: ${props =>
    props.windowInnerWidth > 1300
      ? '40px 45px'
      : props.windowInnerWidth > 1000
      ? '20px 35px'
      : '15px 20px'};
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
  border-radius: 15px;
  box-shadow: 0 2px 10px #c5c6c7;
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
  background: linear-gradient(
    to top,
    #c5c6c7,
    transparent 70%,
    transparent 100%
  );
`;

const StyledTextWrapper = styled.div`
  color: #0b0c10;
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 100%;
  width: 100%;
  /* background: linear-gradient(to top, black, transparent 70%, transparent 100%); */
  grid-column-start: ${props => props.colStart};
  grid-column-end: ${props => props.colEnd};
  grid-row-start: ${props => props.rowStart};
  grid-row-end: ${props => props.rowEnd};
`;

const StyledProjectsHeader = styled.h1`
  color: #c5c6c7;
  /* margin: auto auto 0 auto; */
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
  let gridRow = 1;
  let gridCol = 2;
  let index = 0;

  projectTiles.push(
    <StyledProjectsHeaderTile
      key="projectsHeaderTile"
      rowStart={1}
      rowEnd={2}
      colStart={1}
      colEnd={2}
    >
      <StyledProjectsHeader>Projects</StyledProjectsHeader>
    </StyledProjectsHeaderTile>
  );

  for (const project in projectData) {
    const proj = projectData[project];
    const title = projectData[project].title;
    const image = projectData[project].images[0];
    const techList = projectData[project].previewTechStack.split(',').join(' ');
    const i = index;

    FullProjectElements.push(createProjectElement(proj));

    projectTiles.push(
      <StyledProjectTile
        key={title}
        rowStart={gridRow}
        rowEnd={gridRow + 1}
        colStart={gridCol}
        colEnd={gridCol + 1}
        onClick={() => setActiveProjectIndex(i)}
        onMouseEnter={() => setFocusedTileIndex(i)}
        onMouseLeave={() => setFocusedTileIndex(null)}
      >
        <StyledTextWrapper isFocus={focusedTileIndex === i}>
          <StyledProjectTitle>{title}</StyledProjectTitle>
          {/* <StyledTechList>{techList}</StyledTechList> */}
        </StyledTextWrapper>
        <StyledImage src={image} alt={title} />
        <StyledFadeEffect isFocus={focusedTileIndex === i} />
      </StyledProjectTile>
    );

    index++;

    if (layouts.windowInnerWidth > 1300) {
      if (gridCol === 4) {
        gridRow++;
        gridCol = 1;
      } else {
        gridCol++;
      }
    } else {
      if (gridCol === 2) {
        gridRow++;
        gridCol = 1;
      } else gridCol++;
    }
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
