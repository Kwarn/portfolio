import React, { useState } from 'react'
import Skill from './Skill/Skill'
import imageAssets from '../../assets/assets'
import classes from './Skills.module.css'

const Skills = () => {
  const [skills] = useState([
    {
      title: 'Javascript',
      content: `ES6+, React, React-Router, Redux, Redux-Saga, Thunk, Axios, Enzyme, NodeJs, NextJs.`,
      image: imageAssets.javascript,
      fadeInAndAlignDirection: 'left',
      delayRenderDuration: 0,
    },
    {
      title: 'Python',
      content: `TkInter, Django, SQLite, PyGame`,
      image: imageAssets.python,
      fadeInAndAlignDirection: 'right',
      delayRenderDuration: 400,
    },
    {
      title: 'Software & Practices',
      content: `UI/UX design, SQL, HTML, CSS, GitHub, Unix Commands, Dev-Tools, Firebase, Webpack, Photoshop, Gimp, Adobe Premiere Pro..`,
      image: imageAssets.uiUx,
      fadeInAndAlignDirection: 'left',
      delayRenderDuration: 800,
    },
    {
      title: 'Dev Environment',
      content: `Ubuntu 20.04, Windows 10 with GitBash, VSCode, Pycharm, Firefox, Chrome.`,
      image: imageAssets.visualStudioCode,
      fadeInAndAlignDirection: 'right',
      delayRenderDuration: 1200,
    },
  ])

  const skillSections = skills.map(skill => (
    <Skill
      key={skill.title}
      {...skill}
      delayRenderDuration={skill.delayRenderDuration}
    />
  ))
  return <div className={classes.Skills}>{skillSections}</div>
}

export default Skills
