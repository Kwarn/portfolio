import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import imageAssets from '../../assets/assets'
import Project from './Project/Project'
import classes from './ProjectSlider.module.css'

const ProjectSlider = ({ showModal }) => {
  const [projectSlides] = useState([
    {
      title: 'Portfolio',
      image: imageAssets.portfolio,
      previewTechStack: 'Javascript, React, Firebase, CSS',
      gitHubLink: 'https://github.com/Kwarn/portfolio',
      description: `Serving as a live environment to create and tinker with components, the portfolio has been an invaluable resource allowing me to practise a variety of design approaches, receive feedback and consider different perspectives.
      
      Throughout the project I’ve challenged myself to implement components & features from the ground up, with the goal of achieving a strong grasp of how popular components work.`,
      whatILearned: `How to debug effectively, finding and adapting solutions to my specific case. 
      With many of these challenges being untrodden ground, learning how to debug efficiently has been crucial to maintaining positivity, progress and keeping to my deadlines.
      My understanding and accuracy when predicting where and why bugs are likely to occur has dramatically improved through practice. I’ve learned multiple techniques for locating the source of issues and thrive on the process of weeding out bad solutions and honing in on the best solutions for my case.`,
      technicalPractices:
        'IntersectionObserver API for LazyLoading & scroll to navigation, EmailJS API allowing direct messaging from browser to inbox, File-saver libary for direct downloading of CV from react, Carousel with UseSwipable hook to allow swiping between slides, Form validation with invalid form error message handling, Various CSS layout/positioning examples, CSS failsafes to prevent sticky hover effects on mobile, Fully responsive design catering from 4k users to 320x568 iPhone 5 users',
    },
    {
      title: 'Burger Builder',
      image: imageAssets.burgerBuilder,
      liveDemoLink: 'https://react-burger-builder-679aa.web.app/',
      previewTechStack: 'Javascript, React, Redux, Redux-Saga, Firebase, CSS',
      gitHubLink: 'https://github.com/Kwarn/burger-builder',
      courseLink:
        'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
      description: `Built alongside React The Complete Guide, This app allows users to create and order their own customized burger.

      The project greatly helped cement my understanding of React, Redux and the differences and nuances in approach when developing responsive react applications.`,

      whatILearned: `The difference between new and old approaches.

      My final practice in this project was to convert the app from mostly older class-based components using lifecycle hooks (componentDidMount) to newer functional components using React Hooks (useEffect).  This played a vital role in reaffirming my overall understanding of React.`,
      technicalPractices: `Multiple approaches to handling State, Preservation of user's session with Authentication tokens and localStorage, Promises & Asynchronous actions with Thunk/Sagas & Fetch/Axios, Class-based components and Functional components, Higher order components, React.Memo and performance tweaks, Database rules configuration`,
    },
    {
      title: 'Square Playground',
      image: imageAssets.squarePlayground,
      liveDemoLink: 'https://square-playground.web.app/',
      previewTechStack: 'Javascript, React, Redux, Css, Html',

      gitHubLink: 'https://github.com/Kwarn/square-playground',
      description: `A slot machine game based on Math.random() logic. This was one of my first practice apps diving into the world of JavaScript and React. 

      Built on a lot of guess work and trial and error the experience inspired my love for programming and the reward for overcoming challenges, it taught me to persevere when difficult unknown technical concepts seemed insurmountable.`,
      whatILearned: `This project taught me patience and an eye for detail. Being one of my first javascript apps, I found myself often chasing solutions to problems stemming from what I would now consider a trivial or silly source. The experience provided me a better gauge as to when it was acceptable to ask for help.

      An early build of this project was experiencing performance issues caused by large image file sizes and complicated logic. While in pursuit of a solution to the complicated logic, I was introduced to Big O notation which helped me to understand why and how to refactor the code.`,
      technicalPractices:
        'Fundamentals of state and data management, Redux & Immer working with immutable state, Bootstrap with React',
    },
    {
      title: 'Fizzy-Lookup',
      image: imageAssets.fizzyLookup,
      previewTechStack: 'Python, tkinter',
      gitHubLink: 'https://github.com/Kwarn/Fizzy-Lookup',
      description: `Desktop App which allows easier searching of excel data.

      Built for the head of lettings for a boutique serviced apartments company, this project allowed me demonstrate and practice a real world use-case for what I had learned with Python.
      
      The app uses pandas (data analysis library) to convert an excel spread-sheet to columns and rows displayed by tkinter (GUI library). The user can accurately search the data using a combination of 7 drop-down menus.`,
      whatILearned: `The importance of accurately communicating a description of the clients needs so that unnecessary or miscommunicated functionality didn't waste development time.`,

      technicalPractices:
        'Importing and reading XML files with Pandas, Tkinter scrollable canvas frames, Multiple uses of widgets, Grid place & pack layout management, Commutative search algorithm',
    },
    {
      title: 'Fitness',
      image: imageAssets.fitness,
      previewTechStack: 'Python, Tkinter, SQlite3',

      gitHubLink: 'https://github.com/Kwarn/fitness',
      description: `A light-weight MyFitnessPal clone, this was my first python project. This app allows users to save their meal history and add new meals with their ingredients and caloric information to a SQlite database.`,
      whatILearned: `I learned the importance of looking for a cleaner, established solution before implementing my own.

      My initial approach to storing data used the file system to read/write to a text file. I found this approach to be extremely cumbersome. In my search for a better solution I took the time to weight up the different options and settled on using SQLite database.`,
      technicalPractices:
        'Storing user input, Database management, Tkinter widgets,  Grid place & pack layout management',
    },
  ])

  const [x, setX] = useState(0)

  const handlers = useSwipeable({
    onSwipedLeft: () => goRight(),
    onSwipedRight: () => goLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  const slides = projectSlides.map(project => {
    return (
      <div
        key={project.title}
        className={classes.Slide}
        style={{ transform: `translateX(${x}%)` }}
      >
        <Project project={project} showModal={showModal} />
      </div>
    )
  })

  const goLeft = () => {
    x === 0 ? setX(-100 * (slides.length - 1)) : setX(x + 100)
  }
  const goRight = () => {
    x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100)
  }

  return (
    <div {...handlers} className={classes.Slider}>
      {slides}
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

export default ProjectSlider
