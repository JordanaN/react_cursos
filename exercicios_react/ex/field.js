import React, { Component } from 'react'

class Field extends Component {

  constructor(props){
    super(props)
    this.state = { value: props.initialValue }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div>
        <label>{this.state.value}</label> <br />
        <input onChange={this.handleChange} value={this.state.value} />
      </div>
    )
  }
}

export default Field

//target é o input do evento e com o value vc consegue acessar o value do input
//onChange espera uma função
//componentes controlados - stado do JS é a verdade absoluta, ele que manda nos estados
// é sempre do JS para a DOM e não inverso como o angular/vue
//
