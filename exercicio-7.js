/*

  Objetivo: praticar o uso do método .map() para transformar
  *arrays de objetos, incluindo:
  - Criar novas strings combinando dados do objeto (Parte 1)
  - Usar spread operator (...) para copiar um objeto e adicionar
    novas propriedades sem alterar o original (Parte 2)
 
 */
//Parte 1
const produtos = [
  { nome: "Notebook", preco: 3500, categoria: "eletrônicos" },
  { nome: "Mouse", preco: 45, categoria: "eletrônicos" },
  { nome: "Cadeira", preco: 800, categoria: "móveis" },
  { nome: "Mesa", preco: 1200, categoria: "móveis" },
  { nome: "Monitor", preco: 900, categoria: "eletrônicos" }
];

const nomeProdutos = produtos.map((propriedades) => `O produto ${propriedades.nome} custa R$${propriedades.preco}`)
console.log(nomeProdutos);

//parte 2 
const comDesconto = produtos.map(produto => {
  return {  ...produto,precoComDesconto: produto.preco * 0.9}
})
console.log(comDesconto);