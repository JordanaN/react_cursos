import React from 'react'

// props são as propriedades usadas para envio de atributos para o componente
// mesmo sem os () o props esta dentro de uma aerofunction '=>'
export default props => (
  <h1>{props.value}</h1>
)
