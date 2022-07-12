import React, { useState } from 'react';
import Skill from './Skill/Skill';
import imageAssets from '../../../assets/assets';
import classes from './Skills.module.css';

const Skills = () => {
  const [skills] = useState([
    {
      title: 'Core Skills',
      content: `JavaScript ES6+, TypeScript, React, Redux, Node, Express, GraphQL, SQL, Apollo, HTML, CSS.`,
      image: imageAssets.javascript,
      fadeInAndAlignDirection: 'left',
      renderDelayDuration: 200,
    },
    {
      title: 'Python',
      content: `TkInter, Django, SQLite, PyGame`,
      image: imageAssets.python,
      fadeInAndAlignDirection: 'right',
      renderDelayDuration: 400,
    },
    {
      title: 'Software & Practices',
      content: `UI UX, Git, AWS, Unix Commands, Dev-Tools, Firebase, Heroku, Webpack, Gimp/Photoshop.`,
      image: imageAssets.uiUx,
      fadeInAndAlignDirection: 'left',
      renderDelayDuration: 600,
    },
    {
      title: 'Dev Environment',
      content: `Linux Debian/Ubuntu, Windows 10 - GitBash, VSCode, Pycharm.`,
      image: imageAssets.visualStudioCode,
      fadeInAndAlignDirection: 'right',
      renderDelayDuration: 800,
    },
  ]);

  const skillSections = skills.map(skill => (
    <Skill key={skill.title} {...skill} />
  ));
  return <div className={classes.Skills}>{skillSections}</div>;
};

export default Skills;
