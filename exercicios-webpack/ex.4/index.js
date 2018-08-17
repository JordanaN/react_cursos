const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

// operador spread '...' - espalhar os atributos  do objeto
// recebido no novo objeto a ser retornado
function clone(objeto){
    return { ...objeto }
}

const novoProtudo = clone(produto)
novoProtudo.nome = 'Caneta Bic Azul'

console.log(produto, novoProtudo)
