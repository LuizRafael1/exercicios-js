/*
  - OBJETIVO: Processar os dados de um e-commerce simulado para fixar o uso dos loops em JS.
  - 'for of': Usado para percorrer o array de produtos.
  - 'for in': Usado para pegar as propriedades.
  - Lógica: Cálculo dinâmico do valor total da compra somando preço e frete.
 */

const carrinhoDeCompras = [
  { produto: "Teclado Mecânico", preco: 350, frete: 20 },
  { produto: "Mouse Gamer", preco: 180, frete: 15 },
  { produto: "Monitor 24'", preco: 900, frete: 50 }
];

let valorTotalGeral = 0;

for(const item of carrinhoDeCompras){
    console.log("===== Detalhes do produto =====")
    for(const propriedades in item){
        console.log(`${propriedades}:${item[propriedades]}`)
    }
    valorTotalGeral += item.preco + item.frete
}
console.log(`Valor Total da Compra (com frete): R$ ${valorTotalGeral}`);
