import React, { useState } from 'react'
import classes from './Skills.module.css'
import FadeInSection from '../FadeInSection/FadeInSection'
import imageAssets from '../../assets/assets'

const Skills = ({ selectedContentHandler, selectedContentTag }) => {
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
  for (let skill in skills) {
    const image = <img src={skills[skill].image} alt={skills[skill].title} />
    skillSections.push(
      <FadeInSection
        key={skills[skill].title}
        fadeDirection={skills[skill].fadeInAndAlignDirection}
        childAlignDirection={skills[skill].fadeInAndAlignDirection}
      >
        <div className={classes.TechSubsection}>
          {skills[skill].fadeInAndAlignDirection === 'left' ? image : null}
          <div>
            <h2>{skills[skill].title}</h2>
            <p>{skills[skill].content}</p>
          </div>
          {skills[skill].fadeInAndAlignDirection === 'right' ? image : null}
        </div>
      </FadeInSection>
    )
  }

  return <div className={classes.Skills}>{skillSections}</div>
}

export default Skills
