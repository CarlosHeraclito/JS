function somar(a, b){
return a + b;
}
let resultadosoma = somar(5, 3);
console.log(resultadosoma)

function multiplicar(a, b){
    return a - b;
    }
    let resultadomultiplicar = multiplicar(6, 3);
    console.log(resultadomultiplicar)

    function subtrair(a, b){
        return a - b;
        }
        let resultadosubtração = subtrair(6, 3);
        console.log(resultadosubtração)

        function dividir (a, b){
            return a / b;

            if (b > 0) {
                return a / b;
            } else{console.log('Argumento invalido')}
        }


        function calculadora(){
            let numero1 = Number(prompt('Insira o primeiro numero: '))
            let numero2 = Number(prompt('Insira o segundo numero: '))
            let numero3 = Number(prompt('Escolha a operação a ser executada: \n1 - ADIÇÃO 2 - SUBTRAÇÃO 3 - MULTIPLICAÇÃO 4 - DIVISÃO '))


            if (operação ===1){
                somar(numero1, numero2);
            }else if (operação === 2){
                subtrair(numero1, numero2);
            }else if (operação === 3){
                multiplicar(numero1, numero2);
            }else if (operação === 4){
                    dividir(numero1, numero2);}
                    else{
                        alert('Operação inválida')
                        return null;
                    }
            }