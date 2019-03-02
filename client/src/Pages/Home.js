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
      this.setState({
        allQuestions: response.data.questions.splice(0, 5)
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
      <div>
        <div className="columnCentering">
          {/* <h3>
            HAVE A QUESTION?
            <br />
            THE WORLD HAS ANSWERS.
          </h3> */}
          <div className="dropDownParent">
            <h3 className="green" onClick={this.toggleQuestionsForm}>
              ASK A QUESTION
            </h3>
            {this.state.toggleForm ? (
              <i onClick={this.toggleQuestionsForm} class="fas fa-chevron-up" />
            ) : (
              <i
                onClick={this.toggleQuestionsForm}
                class="fas fa-chevron-down"
              />
            )}
          </div>
        </div>
        <div />
        <div className="" />
        {this.state.toggleForm ? (
          <div className="dropDown">
            <NewQuestion reloadQuestions={this.reloadQuestions} />
          </div>
        ) : null}
        <div>
          <h3 className="top-questions-header">Top Questions</h3>
          {this.state.allQuestions.map((question, index) => {
            return (
              <div key={index}>
                <Question question={question} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Home
