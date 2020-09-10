import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import imageAssets from '../../assets/assets'
import Project from '../../components/Project/Project'
import classes from './ProjectSlider.module.css'

const Slider = ({ showModal, selectedContentTag }) => {
  const [projectSlides] = useState({
    portfolio: {
      isFirstElementOfTag: true,
      tag: 'javascript',
      title: 'Portfolio',
      image: null,
      previewTechStack: 'Javascript, React, Firebase, CSS',
      gitHubLink: 'https://github.com/Kwarn/portfolio',
      description: `The portfolio has seen many diffrent design ideas and has served as a live enviroment to recieve feedback on and consider many different perspectives.`,
      whatILearned: `Early on in the project I had created the draw component, being proud of my work I committed for too long to create the UI/UX around it.
      I realised that the user exeperience would suffer when being forced to click most elements to view information which should be always clearly displayed to the user.
      
      I learned the importance of giving up on a bad idea as early as possible so not too waste developement time.`,
      technicalPractices: 'Css',
    },
    burgerBuilder: {
      tag: 'javascript',
      title: 'Burger Builder',
      image: imageAssets.burgerBuilder,
      liveDemoLink: 'https://react-burger-builder-679aa.web.app/',
      previewTechStack: 'Javascript, React, Redux, Redux-Saga, Firebase, CSS',
      gitHubLink: 'https://github.com/Kwarn/burger-builder',
      courseLink:
        'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
      description: `This app allows users to create and order their own customized burger.

       Functionalities include form validation, authentication, database management, automatic login and preservation of the users session.`,
      whatILearned: `This project was instrumental in developing an effective & efficient approach to learning new concepts. 
      By using a compartmentalizing approach to the more difficult parts of the project, I would guide myself with the map of the user's experience and learn each required technique in digestible chunks. Often taking notes and using the rubber duck technique to reinforce my learnings`,
      technicalPractices: `Multiple approaches to handling State, Authentication tokens 
        and localStorage, Asynchronous actions, Class-based components 
        and lifecycle hooks, Functional components and react hooks, 
        Higher order components, Database rules configuration`,
    },
    squarePlayground: {
      tag: 'javascript',
      title: 'Square Playground',
      image: imageAssets.squarePlayground,
      liveDemoLink: 'https://square-playground.web.app/',
      previewTechStack: 'Javascript, React, Redux, Css, Html',

      gitHubLink: 'placeholder',
      description: `A slot machine game based on simple Math.random() logic.

       This was my first practice app diving into the world of javascript and React, the app was built mostly on guess work and google searches.`,
      whatILearned: `This project taught me the importance of how to effectively find solutions and when it was acceptable to ask for help.

      An early build of this project was experiencing performance issues caused by large image file sizes and complicated logic. While in pursuit of a solution to the complicated logic, I was introduced to Big O notation which helped me to understand why and how to refactor the code.`,
      technicalPractices: 'Fundamentals of state and data management',
    },
    fizzyLookup: {
      tag: 'python',
      title: 'Fizzy-Lookup',
      image: null,
      previewTechStack: 'Python, tkinter',
      gitHubLink: 'placeholder',
      description: `Desktop App which allows easier searching of excel data.

      Built for the head of lettings for a boutique serviced apartments company, this project allowed me demonstrate and practice a real world use-case of what I had learned with Python, helping them to work more efficiently on what was previously a time consuming and tedious task.
      
      The app uses pandas (data analysis library) to convert an excel spread-sheet to columns and rows displayed by tkinter (GUI library).
      The excel spread-sheet contains property data such as rental price & number of bedrooms. The user can accurately search the data using a combination of 7 drop-down menus.`,
      whatILearned: `The importance of accurately communicating a description 
        of the clients needs so that unnecessary or miscommunicated functionality
        didn't waste development time.`,
      technicalPractices: 'System process access',
    },
    fitness: {
      isFirstElementOfTag: true,
      tag: 'python',
      title: 'Fitness',
      image: null,
      previewTechStack: 'Python, Tkinter, SQlite3',

      gitHubLink: 'https://github.com/Kwarn/fitness',
      description: `A light-weight MyFitnessPal clone, this app allows users to save their meal history and add new meals with their ingredients and calorie information to a SQlite database.`,
      whatILearned: `I learned why not to reinvent the wheel.

      My initial approach to storing data used the file system to read/write to a .txt file. I found this approach to be extremely cumbersome. In my search for a better solution I took the time to weight up the different options and settled on using SQLite database. 
      I learned the importance of looking for a cleaner, established solution before implementing my own.`,
      technicalPractices: 'Database queries',
    },
    shutdownTimer: {
      tag: 'python',
      title: 'Shutdown Timer',
      previewTechStack: 'Python, tkinter',
      gitHubLink: 'https://github.com/Kwarn/Fizzy-Lookup',
      description:
        'Desktop Application for converting pdf to searchable object',
      technicalPractices: 'System process access',
    },
  })

  const [x, setX] = useState(0)

  const handlers = useSwipeable({
    onSwipedLeft: () => goRight(),
    onSwipedRight: () => goLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  let slidesArr = []
  for (let project in projectSlides) {
    slidesArr.push(
      <div
        key={project}
        className={classes.Slide}
        style={{ transform: `translateX(${x}%)` }}
      >
        <Project
          project={projectSlides[project]}
          showModal={showModal}
          selectedContentTag={selectedContentTag}
        />
      </div>
    )
  }

  const goLeft = () => {
    x === 0 ? setX(-100 * (slidesArr.length - 1)) : setX(x + 100)
  }
  const goRight = () => {
    x === -100 * (slidesArr.length - 1) ? setX(0) : setX(x - 100)
  }

  return (
    <div {...handlers} className={classes.Slider}>
      {slidesArr}
      <div
        onClick={goLeft}
        className={`${classes.SliderControl} ${classes.GoLeft}`}
      >
        <img src={imageAssets.leftChevron} alt="go left" />
      </div>
      <div
        onClick={goRight}
        className={`${classes.SliderControl} ${classes.GoRight}`}
      >
        <img src={imageAssets.rightChevron} alt="go right" />
      </div>
    </div>
  )
}

export default Slider
