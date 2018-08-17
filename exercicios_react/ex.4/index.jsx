import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, { Segundo } from './component'
// usando o import assim  o Primeiro fica por padrão pq foi usado o export default

//tag div esta sendo usada para agrupar os 2 componentes
ReactDOM.render(
  <div>
    <Primeiro />
    <Segundo />
  </div>
, document.getElementById('app'))
