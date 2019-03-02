import React, { Component } from 'react'
import Question from '../Components/Question'
import axios from 'axios'
import NewQuestion from '../Components/NewQuestion'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      allQuestions: [],
      toggleForm: false
    }
  }

  componentDidMount = () => {
    this.reloadQuestions()
  }

  reloadQuestions = () => {
    axios.get('/api/questions').then(response => {
      console.log(response.data.questions)
      this.setState({
        allQuestions: response.data.questions
      })
    })
  }
  toggleQuestionsForm = () => {
    this.setState({
      toggleForm: !this.state.toggleForm
    })
  }

  render() {
    return (
      <div className="home">
        <div className="columnCentering">
          <h3>
            HAVE A QUESTION?
            <br />
            THE WORLD HAS ANSWERS.
          </h3>
          <h3 className="green" onClick={this.toggleQuestionsForm}>
            ASK A QUESTION
          </h3>
        </div>
        <div />
        <div className="" />
        {this.state.toggleForm ? (
          <div className="dropDown">
            <NewQuestion reloadQuestions={this.reloadQuestions} />
          </div>
        ) : null}

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
