function numeroQuadrado(){
    let numero = Number(prompt(`Insira um numero inteiro: `))

    let quadrado = Math.pow(numero, 2)

    alert(`O quadrado de ${numero} é ${quadrado}`)
}

numeroQuadrado()