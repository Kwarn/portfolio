import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './containers/Home/Home'
import Layout from './Hoc/Layout/Layout'
import AboutMe from './components/AboutMe/AboutMe'
import classes from './App.module.css'

const Projects = React.lazy(() =>
  import('./containers/Projects/Projects')
)
const Skills = React.lazy(() => import('./components/Skills/Skills'))
const Contact = React.lazy(() => import('./containers/Contact/Contact'))


const App = props => {
  let routes = (
    <Switch>
      <Route
        path="/projects"
        render={() => (
          <Suspense fallback={<div>Something Went Wrong...</div>}>
            <Projects/>
          </Suspense>
        )}
      />
      <Route
        path="/skills"
        render={() => (
          <Suspense fallback={<div>Something Went Wrong...</div>}>
            <Skills />
          </Suspense>
        )}
      />
      <Route
        path="/contact"
        render={() => (
          <Suspense fallback={<div>Something Went Wrong...</div>}>
            <Contact />
          </Suspense>
        )}
      />
      <Route
        path="/aboutme"
        render={() => (
          <Suspense fallback={<div>Something Went Wrong...</div>}>
            <AboutMe />
          </Suspense>
        )}
      />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <div className={classes.App}>
      <Layout>{routes}</Layout>
    </div>
  )
}

export default App
