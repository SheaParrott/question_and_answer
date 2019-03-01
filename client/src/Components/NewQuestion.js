import React, { Component } from 'react'
import axios from 'axios'

class NewQuestion extends Component {
  createQuestion = event => {
    event.preventDefault()
    let form = event.target
    let formData = new FormData(form)
    for (let pair of formData.entries()) {
      console.log(pair[0] + ', ' + pair[1])
    }

    axios.post('/api/questions/new', formData).then(response => {
      form.reset()
      this.props.reloadQuestions()
    })
  }

  render() {
    return (
      <form onSubmit={this.createQuestion}>
        <input type="text" placeholder="Header for your question" name="question[header]" />
        <textarea name="question[body]" placeholder="Body for your question" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default NewQuestion
