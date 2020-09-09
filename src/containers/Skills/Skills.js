import React, { useState } from 'react'
import classes from './Skills.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import imageAssets from '../../assets/assets'

const Skills = ({ selectedContentHandler, selectedContentTag, elementRef }) => {
  const [skills] = useState({
    javascript: {
      title: 'Javascript',
      content: `ES6+, React, React-Router, Redux, Redux-Saga, Thunk, Axios, Enzyme,
    NodeJs, NextJs.`,
      image: imageAssets.javascript,
      fadeDirection: 'left',
      textAlign: classes.TextAlignLeft,
    },
    python: {
      title: 'Python',
      content: `TkInter, Django, SQLite, PyGame`,
      image: imageAssets.python,
      fadeDirection: 'right',
      textAlign: classes.TextAlignRight,
    },
    general: {
      title: 'General',
      content: `UX/UI design, SQL, HTML, CSS modules, GitHub/Git Commands, Unix
      Command-line, React/Redux Dev-Tools, Firebase Auth/Database/Hosting,
      Webpack, Photoshop, Gimp, Adobe Premiere Pro..`,
      image: imageAssets.uiUx,
      fadeDirection: 'left',
      textAlign: classes.TextAlignLeft,
    },
    devEnv: {
      title: 'Development Environment',
      content: `Ubuntu 20.04, Windows 10 with GitBash, VSCode, Pycharm, Firefox,
      Chrome.`,
      image: imageAssets.visualStudioCode,
      fadeDirection: 'right',
      textAlign: classes.TextAlignRight,
    },
  })

  const skillSections = []
  for (let skill in skills) {
    skillSections.push(
      <FadeInSection fadeDirection={skills[skill].fadeDirection}>
        <div className={`${classes.TechSubsection} ${skills[skill].textAlign}`}>
          <img src={skills[skill].image} alt={skills[skill].title} />
          <h2>{skills[skill].title}</h2>

          <p>{skills[skill].content}</p>
        </div>
      </FadeInSection>
    )
  }

  return (
    <div ref={elementRef} className={classes.Skills}>
      <div className={classes.TechLists}>{skillSections}</div>
    </div>
  )
}

export default Skills
