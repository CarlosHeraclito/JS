let cont = 0;
let numDigitado = Number(prompt('Digite Um numero'));
let qtdpares = 0

while (cont <= numDigitado) {
    if(cont % 2 === 0) {
        console.log(`Numeros Pares ${cont}`)
        qtdpares++
    }
    cont ++;
}

