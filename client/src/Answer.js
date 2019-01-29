import React, { Component } from 'react'
import axios from 'axios'

class Answer extends Component {
  deleteAnswer = () => {
    axios.delete(`/api/answers/${this.props.id}`).then(response => {
      this.props.loadAnswers()
    })
  }

  render() {
    return (
      <div className="comment">
        <div className="line" />
        <p>{this.props.body}</p>
        <div className="vote">
          <button onClick={this.addRatingToAnswer}>Upvote</button>
          <h4>{this.props.rating}</h4>
          <button onClick={this.subtractRatingFromAnswer}>Downvote</button>
          <button onClick={this.deleteAnswer}>Delete This Answer</button>
        </div>
      </div>
    )
  }
}

export default Answer
