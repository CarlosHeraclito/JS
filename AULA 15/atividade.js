let numUsuario = Number(prompt('Digite um numero para finalizar a contagem'))

let qtdNumeros = 0 
let somaNumeros = 0

for(let i = 0; i<= numUsuario; i++){
    console.log(i)
    qtdNumeros += 1
    somaNumeros += 1
}

console.log('Quantidades de numeros' + qtdNumeros)

console.log(`quantidades de numeros ${qtdNumeros}`)
console.log(`Soma dos numeros ${somaNumeros}`)
