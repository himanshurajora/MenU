import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Main from './main/Main'


function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/:id" exact><Main /></Route>
      </Switch>
    </Router>
  )

}

export default App
