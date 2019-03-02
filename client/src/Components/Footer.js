import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Footer extends Component {
  render() {
    return (
      <div className="navBar">
        <Link className="white" to="/">
          HOME
        </Link>
        <Link className="white" to="/questions">
          BROWSE
        </Link>
        <Link className="white" to="/about">
          ABOUT
        </Link>
        <h4 className="appName">SheaParrott</h4>
      </div>
    )
  }
}

export default Footer
