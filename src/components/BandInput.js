// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: '',
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({ name: ''})
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={ (e) => this.handleSubmit(e)}>
          <input 
            type='text'
            onChange={this.handleChange} />
          <input type='submit' />
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput