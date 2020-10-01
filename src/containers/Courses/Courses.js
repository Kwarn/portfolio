import React, { useState } from 'react'
import imageAssets from '../../assets/assets'
import Course from './Course/Course'
import classes from '../../containers/Courses/Courses.module.css'

const Courses = ({ showModal }) => {
  const [courses] = useState([
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
      desc:
        'My first detailed introduction to Javascript, left me wanting more!',
      courseLink: 'https://www.freecodecamp.org/karl_warner',
      cert: imageAssets.freeCodeCampCertificate,
    },
    {
      isFirstElementOfTag: true,
      title: 'Learn SQL',
      desc:
        'Using SQlite3 in the fitness project prompted me to brush up on my SQL knowledge.',
      courseLink: 'https://www.codecademy.com/learn/learn-sql',
      cert: imageAssets.sqlCodeAcademyCertificate,
    },
    {
      title: 'Learn Python',
      desc:
        'The first online course I completed back in 2017, when I first discovered my love of programming.',
      courseLink: 'https://www.codecademy.com/learn/learn-python-3',
      certAlt: imageAssets.python,
    },
  ])

  let courseElements = courses.map(course => (
    <Course key={course.title} course={course} showModal={showModal} />
  ))

  return <div className={classes.Courses}>{courseElements}</div>
}

export default Courses
