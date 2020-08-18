import React, { useState } from 'react'
import imageAssets from '../../assets/assets'
import Course from '../../components/Course/Course'
import classes from '../../containers/Courses/Courses.module.css'

const Courses = props => {
  const [coursesObject] = useState({
    javascriptComplete: {
      title: 'Javascript - The Complete Guide 2020 (Beginner + Advanced)',
      desc: 'A comprehensive course including ES6 features',
      courseLink:
        'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/',
      cert: imageAssets.javascriptCertificate,
    },
    reactComplete: {
      title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
      desc: 'A comprehensive course including ES6 features',
      courseLink:
        'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
      quote:
        'This is the most comprehensive and modern course you can find on JavaScript - Maximilian Schwarzmüller',
      cert: imageAssets.reactCertificate,
    },
    JavascriptFreeCodeCamp: {
      title: 'Javascript Algorithms and Data Structures',
      desc: 'A comprehensive course including ES6 features',
      courseLink: 'https://www.freecodecamp.org/karl_warner',
      cert: imageAssets.freeCodeCampCertificate,
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

  return <div className={classes.CoursesWrapper}>{courses}</div>
}

export default Courses
