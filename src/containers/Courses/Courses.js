import React, { useState } from 'react';
import imageAssets from '../../assets/assets';
import Course from './Course/Course';
import classes from '../../containers/Courses/Courses.module.css';

const Courses = ({ showModal }) => {
  const [courses] = useState([
    {
      title: 'WIP: NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
      desc: `A comprehensive guide to NodeJs & surrounding libaries. 
        Projects include a server side rendered e-commerce API, RESTful API & Graphql API while following best practices.`,
      courseLink: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
      cert: imageAssets.workInProgressCertificate,
    },
    {
      title: 'Understanding TypeScript - 2020 Edition',
      desc: `Complete guide to TypeScript including using TypeScript with React/Redux/Node/Express/Next, decorators, interfaces, types, namespaces and more..`,
      courseLink: 'https://www.udemy.com/course/understanding-typescript/',
      cert: imageAssets.typescriptCertificate,
    },
    {
      title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
      desc: `A comprehensive course demonstrating multiple approaches both new and old to creating responsive react apps.`,
      courseLink:
        'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
      cert: imageAssets.reactCertificate,
    },
    {
      title: 'Javascript - The Complete Guide 2020 (Beginner + Advanced)',
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

  let courseElements = courses.map(course => (
    <Course key={course.title} course={course} showModal={showModal} />
  ));

  return (
    <div className={classes.Courses}>
      <h2>Courses & Certificates</h2>
      {courseElements}
    </div>
  );
};

export default Courses;
