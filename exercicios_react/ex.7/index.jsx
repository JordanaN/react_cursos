import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

//utilizando a tag children para renderizar os componentes de maneira dependente do componente pai
ReactDOM.render(
  <Family lastName='Silva'>
    <Member name='Jordana' />
    <Member name='Gustavo' />
    <Member name='Mel' />
  </Family>
, document.getElementById('app'))
