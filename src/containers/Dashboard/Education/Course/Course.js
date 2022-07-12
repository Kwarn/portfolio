import React from 'react';
import imageAssets from '../../../../assets/assets';
import DrawToggle from '../../../DrawToggle/DrawControl';
import styled from 'styled-components';

const StyledCourseContainer = styled.div`
  text-decoration: none;
  color: #c5c6c7;
  height: 10vh;
  margin: auto;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: left;
  @media (max-width: 1000px) {
    background: rgba(0, 0, 0, 0.6);
  }
`;
const StyledCertificateWrapper = styled.div`
  /* height: 6vh; */
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  object-fit: cover;
`;

const StyledCertficiate = styled.img`
  object-fit: contain;
  max-width: 100px;
  margin: 5px 0 5px 0;
  @media (max-width: 700px) {
    max-width: 70px;
  }
`;

const StyledMagnifyingGlass = styled.img`
  position: absolute;
  right: 10px;
  bottom: 20px;
  max-width: 40px;
  @media (max-width: 700px) {
    max-width: 20px;
  }
`;

const StyledCourseTitleLink = styled.a`
  font-family: 'Teko';
  color: inherit;
  font-size: 4vh;
  text-decoration: none;
  margin: auto 4vw auto 2vw;
  @media (max-width: 1000px) {
    font-size: 2.5vh;
  }
`;

const Course = ({ course, showModalCb }) => {
  const { title, cert, desc, courseLink } = course;

  const certificate = cert ? (
    <StyledCertficiate src={cert} alt={`${title} certificate`} />
  ) : (
    ''
  );

  const magnifyingGlass = cert ? (
    <StyledMagnifyingGlass
      src={imageAssets.magnifyingGlass}
      alt="click to view"
    />
  ) : null;

  const description = <p>{desc}</p>;
  return (
    <StyledCourseContainer>
      <StyledCertificateWrapper
        onClick={
          cert ? () => showModalCb({ isShown: true, content: [cert] }) : null
        }
      >
        {certificate}
        {magnifyingGlass}
      </StyledCertificateWrapper>

      <StyledCourseTitleLink
        href={courseLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </StyledCourseTitleLink>

      <DrawToggle drawContent={description} />
    </StyledCourseContainer>
  );
};

export default Course;
