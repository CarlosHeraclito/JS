let numero = 0

let qtdPares = 0
let somaPares = 0

while(numero <11){

    if (numero % 2 == 0){
        console.log(numero)
        qtdPares++
        somaPares += numero
    }
numero = numero + 1

}

console.log('quantidade de números pares' + qtdPares)
console.log('Soma dos números pares' + somaPares)