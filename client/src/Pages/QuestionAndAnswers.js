import React, { Component } from 'react'
import Answer from '../Components/Answer'
import axios from 'axios'
import Question from '../Components/Question'
import Loading from '../Components/Loading'

class QuestionAndAnswers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      questionAndItsAnswers: false
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

  loadQuestion = () => {
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
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }

    axios.post('/api/answers/new', formData).then(response => {
      form.reset()
      this.loadAnswers()
    })
  }

  render() {
    if (!this.state.questionAndItsAnswers) {
      return <Loading />
    }
    return (
      <div className="q_and_a">
        <Question
          question={this.state.questionAndItsAnswers}
          loadQuestion={this.loadQuestion}
          bool={true}
        />
        <h3>Answers</h3>
        <form onSubmit={this.createAnswer}>
          <input
            type="hidden"
            name="answer[question_id]"
            value={this.props.match.params.id}
          />
          <textarea name="answer[body]" placeholder="Know the answer?" />
          <button type="submit">Submit</button>
        </form>
        {this.state.questionAndItsAnswers.answers.map(answer => {
          return (
            <Answer
              key={answer.id}
              id={answer.id}
              body={answer.body}
              loadAnswers={this.loadAnswers}
              rating={answer.rating}
            />
          )
        })}
      </div>
    )
  }
}

export default QuestionAndAnswers
