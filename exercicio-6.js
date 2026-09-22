/*
  - OBJETIVO: verificar se usuários são maiores de idade para ter acesso a 100% dos serviços de uma empresa
  fazendo o uso do 'forEach()' para percorrer a lista de usuários com acesso direto ao item e ao índice.
 */

const users = [
    {name:'Ricardo', age:33, contact:'(11)97552-5110'},
    {name:'Melissa', age:18, contact:'(11)92982-4131'},
    {name:'Victhor', age:18, contact:'(11)90234-1238'},
    {name:'Pedro', age:16, contact:'(11)91263-7324'}
]

users.forEach((item,index) => {
   if(item.age < 18){
    console.log(`O usuário ${item.name}, posição ${index + 1} é menor de idade e portanto não tera 100% de acesso aos serviços`)
   }
   else{
    console.log(`O usuário ${item.name}, posição ${index + 1} tem acesso a todos os serviços da empresa`)
   }
})