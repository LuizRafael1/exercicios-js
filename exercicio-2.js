//OBJETIVO:
// Imprimir a tabuada de multiplicação dos números de 1 a 10, exibindo para cada número todas as suas multiplicações de 1 a 10.
for (let i = 1; i <= 10; i++) {
    console.log(`\nTabuada do número ${i}`)

    for (let j = 1; j <=10; j++) {
        console.log(`${i} X ${j} = ${i*j}`)
        
    }
}
