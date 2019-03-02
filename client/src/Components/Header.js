import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: undefined
    }
  }

  addUserInput = event => {
    this.setState({
      userInput: event.target.value
    })
  }

  search = event => {
    event.preventDefault()
    console.log(this.state.userInput)
    // const formData = new FormData(userInput)
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1])
    // }
    axios.get(`/api/search/${this.state.userInput}`).then(response => {
      window.location = `/questions/search/${this.state.userInput}`

      console.log(response.data.question)
    })
  }

  render() {
    return (
      <div className="navBar">
        <h5 className="appName">Q&A</h5>
        <Link className="white" to="/">
          Home
        </Link>
        <Link className="white" to="/questions">
          Browse
        </Link>
        <form className="navBar" onSubmit={this.search}>
          <input
            className="NavBarInput"
            placeholder="Search by keyword"
            type="text"
            onChange={this.addUserInput}
            name="keyword"
          />
        </form>
      </div>
    )
  }
}

export default Header
