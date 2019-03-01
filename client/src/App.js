import React, { Component } from 'react'
import QuestionAndAnswers from './Pages/QuestionAndAnswers'
import Home from './Pages/Home'
import Header from './Components/Header'
import Browse from './Pages/Browse'
import axios from 'axios'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Question from './Components/Question'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questions: []
      // question_id: undefined,
      // chosenQuestion: {}
    }
  }

  componentDidMount = () => {
    axios.get('/api/questions').then(response => {
      this.setState(
        {
          questions: response.data.questions
        },
        () => console.log(this.state.questions)
      )
    })
  }

  addRatingToAnswer = () => {
    // axios call to add to rating
  }

  subtractRatingFromAnswer = () => {
    // axios call to remove to rating
  }

  // changeStateOfQuestionID = event => {
  //   console.log(event.target.value)
  // this.setState({
  //   question_id: event.target.value.id
  // })
  // }

  // selectQuestion = event => {
  //   axios.get(`api/question/{this.state.${this.state.question_id}`).then(response => {
  //     this.setState(
  //       {
  //         chosenQuestion: response.data
  //       },
  //       console.log(this.state.question_id)
  //     )
  //   })

  // use question_id to do a axios call to get the single
  // question from api
  // then setstate to the question
  // }

  render() {
    return (
      <Router>
        <div>
          <Header questions={this.state.questions} />
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
