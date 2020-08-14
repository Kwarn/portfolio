import React, { useState } from 'react'
import imageAssets from '../../assets/assets'
import Course from './Course/Course'

const Courses = props => {
  const [coursesObject] = useState({
    javascriptComplete: {
      title: 'Javascript - The Complete Guide 2020 (Beginner + Advanced)',
      desc: 'A comprehensive course including ES6 features',
      cert: imageAssets.javascriptCertificate,
    },
    reactComplete: {
      title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
      desc: 'A comprehensive course including ES6 features',
      cert: imageAssets.reactCertificate,
    },
    JavascriptFreeCodeCamp: {
      title: 'Javascript Algorithms and Data Structues',
      desc: 'A comprehensive course including ES6 features',
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
      ></Course>
    )
  }

  return courses
}

export default Courses
