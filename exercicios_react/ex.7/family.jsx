import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
  <div>
    <h1>Família</h1>
    { childrenWithProps(props.children, props) }
  </div>
)

//.children especifica que existe um componente filho
// por padrão não existe propagação de propridades de um componente para o seus componentes filhos
// cloneElement é uma função do react que clona as propriedades do componente a partir do .children para
//os seus componentes filhos e só recebe um elemento
// '...' spread cria um obj clone com os atributos de outro obj
//map() - percorre um array pegando seus elementos e os transformando em outra coisa no final
//gera um novo array com os elementos que foram transformados
//child é um callback
