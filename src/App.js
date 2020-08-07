import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './containers/Home/Home'
import ProjectsOverview from './containers/projects/ProjectsOverview/ProjectsOverview'

const Cv = React.lazy(() => import('./components/cv/cv'))

const App = props => {
  let routes = (
    <Switch>
      <Route
        path="/cv"
        render={() => (
          <Suspense fallback={<Home />}>
            <Cv />
          </Suspense>
        )}
      />
      <Route
        path="/projects"
        render={() => (
          <Suspense>
            <ProjectsOverview />
          </Suspense>
        )}
      />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  )

  return routes
}

export default App
