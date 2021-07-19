import React, { useState } from 'react';
import Course from './Course/Course';
import imageAssets from '../../../assets/assets';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #0b0c10;
  display: flex;
  justify-content: center;
`;

const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px;
`;

const StyledFirstBlock = styled.div`
  margin: auto;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 2;
  @media (max-width: 1800px) {
    margin: auto auto auto 50px;
  }
  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const StyledSecondBlock = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  width: 100%;
  border-radius: 0 0 0 70%;
  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 3;
    border-radius: 0 0 0 60%;
  }
  box-shadow: inset 5px -5px 3px #c5c6c7;
`;

const StyledThirdBlock = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  border-radius: 0 70% 0 0;
  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  box-shadow: inset -5px 5px 3px #c5c6c7;
`;

const StyledFourthBlock = styled.div`
  margin: auto;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;

const Courses = ({ showModalCb }) => {
  const [courses] = useState([
    {
      title: 'NodeJS - The Complete Guide',
      desc: `A comprehensive guide to NodeJs & surrounding libaries. 
        Projects include a server side rendered e-commerce API, RESTful API & Graphql API while following best practices.`,
      courseLink: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
      cert: imageAssets.nodeCertificate,
    },
    {
      title: 'Understanding TypeScript - 2020 Edition',
      desc: `Complete guide to TypeScript including using TypeScript with React/Redux/Node/Express/Next, decorators, interfaces, types, namespaces and more..`,
      courseLink: 'https://www.udemy.com/course/understanding-typescript/',
      cert: imageAssets.typescriptCertificate,
    },
    {
      title: 'React - The Complete Guide',
      desc: `A comprehensive course demonstrating multiple approaches both new and old to creating responsive react apps.`,
      courseLink:
        'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
      cert: imageAssets.reactCertificate,
    },
    {
      title: 'Javascript - The Complete Guide 2020',
      desc: `A comprehensive course including ES6+ features. 
        This course was vital in helping cement my understanding of the 
        underlying ways in which Javascript works.`,
      courseLink:
        'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/',
      cert: imageAssets.javascriptCertificate,
    },
    {
      title: 'Javascript Algorithms and Data Structures',
      desc: 'My first detailed introduction to Javascript, left me wanting more!',
      courseLink: 'https://www.freecodecamp.org/karl_warner',
      cert: imageAssets.freeCodeCampCertificate,
    },
    {
      title: 'Learn SQL',
      desc: 'Using SQlite3 in the fitness project prompted me to brush up on my SQL knowledge.',
      courseLink: 'https://www.codecademy.com/learn/learn-sql',
      cert: imageAssets.sqlCodeAcademyCertificate,
    },
  ]);

  const courseElements = courses.map(course => (
    <Course key={course.title} course={course} showModalCb={showModalCb} />
  ));

  const firstCourseBlock = courseElements.slice(0, 3);
  const secondCourseBlock = courseElements.slice(3);

  return (
    <StyledWrapper>
      <StyledGrid>
        <StyledFirstBlock>{firstCourseBlock}</StyledFirstBlock>
        <StyledSecondBlock background={imageAssets.studyingBackground} />
        <StyledThirdBlock background={imageAssets.studyingBackground2} />
        <StyledFourthBlock>{secondCourseBlock}</StyledFourthBlock>
      </StyledGrid>
    </StyledWrapper>
  );
};

export default Courses;
