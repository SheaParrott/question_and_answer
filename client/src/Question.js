import React, { Component } from 'react'
import Answer from './Answer'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Question extends Component {
  deleteQuestion = () => {
    axios.delete(`/api/questions/${this.props.id}`).then(response => {
      this.props.loadAnswers()
    })
  }

  upvoteQuestion = () => {
    axios.put(`/api/questions/upvote/${this.props.id}`).then(response => {
      this.props.loadAnswers()
    })
  }

  downvoteQuestion = () => {
    axios.put(`/api/questions/downvote/${this.props.id}`).then(response => {
      this.props.loadAnswers()
    })
  }
  render() {
    return (
      <div className="question">
        <Link to={`/questions/${this.props.question.id}`}>
          <h3 onClick={this.showID} value={this.props.question.key}>
            {this.props.question.header}
          </h3>
        </Link>
        <p>{this.props.question.body}</p>
        {this.props.bool ? (
          <div className="vote">
            <button onClick={this.upvoteQuestion}>Upvote</button>
            <h4>{this.props.question.rating}</h4>
            <button onClick={this.downvoteQuestion}>Downvote</button>
            <button onClick={this.deleteQuestion}>Delete This Question</button>
          </div>
        ) : null}

        <div className="line" />
      </div>
    )
  }
}

export default Question
