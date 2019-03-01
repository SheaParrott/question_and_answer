import React, { Component } from 'react'
import Question from '../Components/Question'
import axios from 'axios'
import NewQuestion from '../Components/NewQuestion'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allQuestions: []
    }
  }

  componentDidMount = () => {
    this.reloadQuestions()
  }

  reloadQuestions = () => {
    axios.get('/api/questions').then(response => {
      this.setState({
        allQuestions: response.data.questions
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>Q & A</h1>
        </div>
        <h3 className="header-caption">
          Have a question? The world has answers.
        </h3>
        <h3 className="question-prompt">Ask anything.</h3>
        <NewQuestion reloadQuestions={this.reloadQuestions} />
        <h3 className="top-questions-header">Top Questions</h3>
        {this.state.allQuestions.splice(0, 5).map((question, index) => {
          return (
            <div key={index}>
              <Question question={question} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Home
