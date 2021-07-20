import imageAssets from '../../../assets/assets';

export const bigProjects = [
  {
    title: 'E-Commerce',
    images: [imageAssets.ecommerce, imageAssets.ecommerceImage2],
    liveDemoLink: 'https://e-commerce-d1b62.web.app/home',
    previewTechStack: 'Javascript, React, Apollo, Node, Css',
    gitHubLink: 'https://github.com/Kwarn/e-commerce',
    description: `
    My current project and work in progess, built on behalf of a flooring wholesaler.
    The current goal is to provide the client with a site they can login to as administrator and display/manage their products on, with the eventual goal of providing them the functionality to gain access to the retail market and sell directly to end-users.
    The current work on the site is focused around fleshing out administrator functionality to allow all CRUD operations via the back-end.
    `,
    lessons: '',
    technicalPractices: `The frontend is built with React & styled-components.
    ApolloClient is used to handle state management and for it's GraphQl interface.
    The backend is a Node Express server which uses GraphQL for handling most requests, with the exception of storing images which uses a REST endpoint with multer-s3 to store images in an AWS S3 bucket.`,
  },
  {
    title: 'Node Projects',
    images: [imageAssets.serverSideRendered],
    liveDemoLink: '',
    previewTechStack: 'Node, Graphql, MongoDB, Aws',
    gitHubLink: 'https://github.com/Kwarn/node-the-complete-guide',
    projectLinks: {
      serverSideRendered: {
        link: 'https://github.com/Kwarn/node-the-complete-guide',
        description: 'E-Commerce - ExpressJs server-side rendering',
      },
      graphQl: {
        link: 'https://github.com/Kwarn/blog-REST-API/',
        description: 'Blog - GraphQl API',
      },
      frontend: {
        link: 'https://github.com/Kwarn/blog-frontend',
        description: 'Blog - Front-End',
      },
    },
    description: `
    Built from the ground up, the goal of these projects was to provide me with a greater knowledge base from which to decide how to proceed with my current project's back-end.
    Projects include a REST Express server-side rendered e-commerce site and a GraphQl blog API with React front-end.
    The most valuable experience I gained from these projects was converting within the projects between multiple approaches, this gave me a solid understanding of the core principles and the varying ways of achieving them.
    `,
    lessons: `How API's work. Detailed understanding of common practices & design patterns.`,
    technicalPractices: ` The REST API uses EJS to serve HTML, nodemailer for signup & password reset processes, csurf with express-sessions and connect-mongodb-session, stripe for mock payments and pdfkit to generate invoices.
    The app was converted from originally using an SQL database with sequelize to now use mongoDB with mongoose.

    The GraphQL API uses Json-web-token & bcrypt to handle authentication, mongoose with MongoDB to store user data, multer to handle file uploads and validation is handled with express-validator and connect-flash.`,
  },
];

export const smallProjects = [
  {
    title: 'Portfolio v1',
    images: [imageAssets.portfolio],
    previewTechStack: 'Javascript, React, Firebase, CSS',
    gitHubLink: 'https://github.com/Kwarn/portfolio-v1',
    description: `
      This is my original portfolio which this site is a decendant of.
      Both portfolios have been invaluable resources, allowing me to practise a variety of design approaches, receive feedback and consider different perspectives.
      Throughout the project I’ve challenged myself to implement components & features from the ground up, with the goal of achieving a strong grasp of how popular components work.`,
    lessons: `Effective debugging, finding and adapting solutions to my specific case. 
      Debugging efficiently has been crucial to maintaining positivity, progress and keeping to my deadlines.
      My abilty to predict why and where bugs are likely to occur has dramatically improved through practice. I’ve learned multiple techniques for locating the source of issues and thrive on the process of honing in on the best solutions.`,
    technicalPractices:
      'IntersectionObserver API for LazyLoading & scroll to navigation, EmailJS API allowing direct messaging from browser to inbox, File-saver libary for direct downloading of CV from react, Carousel with UseSwipable hook to allow swiping between slides, Form validation with invalid form error message handling, Various CSS layout/positioning examples, CSS failsafes to prevent sticky hover effects on mobile, Fully responsive design catering from 4k users to 320x568 iPhone 5 users',
  },
  {
    title: 'Burger Builder',
    images: [imageAssets.burgerBuilder],
    liveDemoLink: 'https://react-burger-builder-679aa.web.app/',
    previewTechStack: 'Javascript, React, Redux, Redux-Saga, Firebase, CSS',
    gitHubLink: 'https://github.com/Kwarn/burger-builder',
    courseLink:
      'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
    description: `Built alongside React The Complete Guide, This app allows users to create and order their own customized burger.
      
      The project greatly helped cement my understanding of React, Redux and the differences and nuances in approach when developing responsive react applications.`,

    lessons: `Asynchronous actions with Async-Await, Promises & Axios. Functional vs class based components.
      Through practising multiple popular approaches to asynchronous actions I've gained a solid understanding of how they fit into the larger React Ecosystem.
      I found one of the most impactful practice in this project was to convert the app from mostly older class-based components using lifecycle hooks (componentDidMount) to newer functional components using React Hooks (useEffect).`,
    technicalPractices: `Multiple approaches to handling State, Preservation of user's session with Authentication tokens and localStorage, Promises & Asynchronous actions with Thunk/Sagas & Fetch/Axios, Class-based components and Functional components, Higher order components, React.Memo and performance tweaks, Database rules configuration.`,
  },
  {
    title: 'Slots Game',
    images: [imageAssets.squarePlayground],
    liveDemoLink: 'https://square-playground.web.app/',
    previewTechStack: 'Javascript, React, Redux, Css, Html',

    gitHubLink: 'https://github.com/Kwarn/square-playground',
    description: `A slot machine game based on Math.random() logic. This was one of my first apps diving into the world of JavaScript and React. 
      
      Built on a lot of guess work and trial and error the experience inspired my love for programming and the reward for overcoming challenges, it taught me to persevere when difficult unknown technical concepts seemed insurmountable.`,
    lessons: `This project taught me patience and an eye for detail. Being one of my first javascript apps, I found myself often chasing solutions to problems stemming from what I would now consider a trivial or silly source. The experience provided me a better gauge as to when it was acceptable to ask for help.`,
    technicalPractices:
      'Fundamentals of state and data management, Redux & Immer working with immutable state, Bootstrap with React',
  },
  {
    title: 'Excel Searcher',
    images: [imageAssets.fizzyLookup],
    previewTechStack: 'Python, Tkinter',
    gitHubLink: 'https://github.com/Kwarn/Fizzy-Lookup',
    description: `Desktop App which allows easier searching of excel data.
      Built for the head of lettings for a boutique serviced apartments company, this project allowed me demonstrate and practice a real world use-case for what I had learned with Python.
      
      The app uses a data analysis library - pandas -to convert an excel spread-sheet to columns and rows displayed by tkinter (GUI library). The user can accurately search the data using a combination of 7 drop-down menus.`,
    lessons: `The importance of accurately communicating a description of the clients needs so that unnecessary or miscommunicated functionality didn't waste development time.`,

    technicalPractices:
      'Importing and reading XML files with Pandas, Tkinter scrollable canvas frames, Multiple uses of widgets, Grid place & pack layout management, Commutative search algorithm.',
  },
  {
    title: 'Fitness App',
    images: [imageAssets.fitness],
    previewTechStack: 'Python, Tkinter, SQlite3',

    gitHubLink: 'https://github.com/Kwarn/fitness',
    description: `A light-weight My Fitness Pal clone, this was my first python project. This app allows users to save their meal history and add new meals with their ingredients and caloric information to a SQlite database.`,
    lessons: `I learned the importance of looking for a cleaner, established solution before implementing my own.
      
      My initial approach to storing data used the file system to read/write to a text file. I found this approach to be extremely cumbersome. In my search for a better solution I took the time to weight up the different options and settled on using SQLite database.`,
    technicalPractices:
      'Storing user input, Database management, Tkinter widgets,  Grid place & pack layout management',
  },
];
