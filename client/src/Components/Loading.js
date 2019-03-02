import React, { Component } from 'react'
import loading from '../assets/loading2.gif'

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <img className="loading" src={loading} alt="loading" />
      </div>
    )
  }
}

export default Loading
