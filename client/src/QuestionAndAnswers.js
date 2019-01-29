import React, { Component } from 'react'
import Answer from './Answer'
import axios from 'axios'
import Question from './Question'

class QuestionAndAnswers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questionAndItsAnswers: {
        answers: []
      }
    }
  }

  componentDidMount = () => {
    this.loadAnswers()
  }

  loadAnswers = () => {
    axios.get(`/api/questions/${this.props.match.params.id}`).then(response => {
      this.setState({
        questionAndItsAnswers: response.data.question
      })
    })
  }

  createAnswer = event => {
    event.preventDefault()
    let form = event.target
    let formData = new FormData(form)
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    axios.post('/api/answers/new', formData).then(response => {
      console.log(response.data)
      form.reset()
      this.loadAnswers()
    })
  }
  render() {
    return (
      <div className="q_and_a">
        <Question
          id={this.state.questionAndItsAnswers.id}
          header={this.state.questionAndItsAnswers.header}
          body={this.state.questionAndItsAnswers.body}
        />
        <h3>Answers</h3>
        <form onSubmit={this.createAnswer}>
          <input type="hidden" name="answer[question_id]" value={this.props.match.params.id} />
          <textarea name="answer[body]" placeholder="Know the answer?" />
          <button type="submit">Submit</button>
        </form>
        {this.state.questionAndItsAnswers.answers.map(answer => {
          return <Answer key={answer.id} body={answer.body} rating={answer.rating} />
        })}
      </div>
    )
  }
}

export default QuestionAndAnswers