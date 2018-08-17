import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponent from './classComponent'

//utilizando a tag children para renderizar os componentes de maneira dependente do componente pai
ReactDOM.render(
  <ClassComponent label='Contador' initialValue={10}/>
, document.getElementById('app'))
