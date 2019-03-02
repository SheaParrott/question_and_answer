import React, { Component } from 'react'
import QuestionAndAnswers from './Pages/QuestionAndAnswers'
import Home from './Pages/Home'
import Header from './Components/Header'
import Browse from './Pages/Browse'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/questions" component={Browse} />
          <Route exact path="/questions/:id" component={QuestionAndAnswers} />
          <Route exact path="/questions/search/:input" component={Browse} />
        </div>
      </Router>
    )
  }
}

export default App
