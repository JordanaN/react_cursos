import React, { Component } from 'react';

export default class ClassComponent extends Component {
// função render é obrigatoria em component React
  constructor(props) {
    super(props)
    //state é default de todo componente
    this.state = { value: props.initialValue }
  }

  sum(delta) {
    this.setState({ value: this.state.value + delta })
  }

  render() {
    return (
      <div>
        <h1>{this.props.label}</h1>
        <h2>{this.state.value}</h2>
        <button onClick={() => this.sum(-1)}>Dec</button>
        <button onClick={() => this.sum(1)}>Inc</button>
      </div>
    )
  }
}

// quando o componente é feito por uma class o acesso ao props
// deve ser feito pelo this e o props deve ser esse nome mesmo
// pois é uma herança

//setState usada para acessar e evoluir o estado do componente
//nunca é alterado e sim a partir dele é criado outros estados
