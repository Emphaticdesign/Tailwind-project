import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Hire from './components/Hire/Hire'
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/hire">
        <Hire />
      </Route>
    </Router>
  )
}

export default App
