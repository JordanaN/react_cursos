import React from 'react'

export default props => (
  <div>
    <h1>Família</h1>
    { React.cloneElement( props.children, {...props} )}
  </div>
)

//.children especifica que existe um componente filho
// por padrão não existe propagação de propridades de um componente para o seus componentes filhos
// cloneElement é uma função do react que clona as propriedades do componente a partir do .children para
//os seus componentes filhos
// '...' spread cria um obj clone com os atributos de outro obj
