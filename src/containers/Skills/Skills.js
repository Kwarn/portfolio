import React, { useState } from 'react'
import Skill from './Skill/Skill'
import imageAssets from '../../assets/assets'
import classes from './Skills.module.css'

const Skills = () => {
  const [skills] = useState({
    javascript: {
      title: 'Javascript',
      content: `ES6+, React, React-Router, Redux, Redux-Saga, Thunk, Axios, Enzyme, NodeJs, NextJs.`,
      image: imageAssets.javascript,
      fadeInAndAlignDirection: 'left',
    },
    python: {
      title: 'Python',
      content: `TkInter, Django, SQLite, PyGame`,
      image: imageAssets.python,
      fadeInAndAlignDirection: 'right',
    },
    general: {
      title: 'General',
      content: `UI/UX design, SQL, HTML, CSS, GitHub, Unix Commands, Dev-Tools, Firebase, Webpack, Photoshop, Gimp, Adobe Premiere Pro..`,
      image: imageAssets.uiUx,
      fadeInAndAlignDirection: 'left',
    },
    devEnv: {
      title: 'Dev Environment',
      content: `Ubuntu 20.04, Windows 10 with GitBash, VSCode, Pycharm, Firefox, Chrome.`,
      image: imageAssets.visualStudioCode,
      fadeInAndAlignDirection: 'right',
    },
  })

  const skillSections = []
  let delay = 0
  for (let skill in skills) {
    skillSections.push(
      <Skill
        {...skills[skill]}
        delayRenderDuration={delay}
      />
    )
    delay += 500
  }

  return <div className={classes.Skills}>{skillSections}</div>
}

export default Skills
