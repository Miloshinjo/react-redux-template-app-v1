import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ContentPage from '../components/ContentPage'
import NotFoundPage from '../components/NotFoundPage'
import WelcomePage from '../components/WelcomePage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/content' component={ContentPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
