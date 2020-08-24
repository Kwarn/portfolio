import React, { useState } from 'react'
import imageAssets from '../../assets/assets'
import Course from './Course/Course'
import classes from '../../containers/Courses/Courses.module.css'

const Courses = props => {
  const [coursesObject] = useState({
    javascriptComplete: {
      title: 'Javascript - The Complete Guide 2020 (Beginner + Advanced)',
      desc: `A comprehensive course including ES6 features. 
        This course was vital in helping cement my understanding of the 
        underlying ways in which Javascript works.`,
      quote:
        'This is the most comprehensive and modern course you can find on JavaScript - Maximilian Schwarzmüller',
      courseLink:
        'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/',
      cert: imageAssets.javascriptCertificate,
    },
    reactComplete: {
      title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
      desc: `Very detailed course demonstrating multiple approaches both new and old to creating react apps.`,
      courseLink:
        'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
      cert: imageAssets.reactCertificate,
    },
    JavascriptFreeCodeCamp: {
      title: 'Javascript Algorithms and Data Structures',
      desc:
        'My first detailed introduction to Javascript, left me wanting more!',
      courseLink: 'https://www.freecodecamp.org/karl_warner',
      cert: imageAssets.freeCodeCampCertificate,
    },
    sqlCodeAcademy: {
      title: 'Learn SQL',
      desc:
        'I took this course as I found a need in the fitness app for a database.',
      courseLink: 'https://www.codecademy.com/learn/learn-sql',
      cert: imageAssets.sqlCodeAcademyCertificate,
    },
    pythonCodeAcademy: {
      title: 'Learn Python 3',
      desc:
        'The first online course I completed back in 2017, when I first discovered my love of programming.',
      courseLink: 'https://www.codecademy.com/learn/learn-python-3',
    },
  })

  let courses = []
  for (let course in coursesObject) {
    courses.push(
      <Course
        key={coursesObject[course].title}
        title={coursesObject[course].title}
        desc={coursesObject[course].desc}
        cert={coursesObject[course].cert}
        courseLink={coursesObject[course].courseLink}
      ></Course>
    )
  }

  return (
    <div>
      <h1 className={classes.SectionTitle}>Courses and Certificates</h1>
      <div className={classes.CoursesWrapper}>{courses}</div>
    </div>
  )
}

export default Courses
