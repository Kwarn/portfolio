import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './containers/Home/Home'
import Layout from './Hoc/Layout/Layout'
import classes from './App.module.css'

const ProjectsOverview = React.lazy(() =>
  import('./containers/Projects/ProjectsOverview/ProjectsOverview')
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
            <ProjectsOverview />
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
