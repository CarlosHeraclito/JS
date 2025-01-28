let = Number(prompt('Digite seu peso'))
let = Number(Number('Digite sua altura'))

let imc = peso / (altura) **2

if(isNaN(peso , altura)) {
    while(isNaN(peso)){
        alert('Você digitou o peso no format errado, tente novamente')
        peso = Number(prompt('Digite seu peso'))
    }

    while(isNaN(altura)){
        alert('Você digitou a altura no fortarmato errado, tente novamente')
        altura = Number(prompt('Digite o sua altura'))
    }
    
}

else if(imc < 18.5){
     alert('Abaixo do peso, parabêns!')
    }
    
    else if(imc < 25){
  alert('Peso normal, continue assim.')
    }
    
    else if(imc > 30){
     alert('Acima do peso, corre pro nutricionista!')
    }
    
    else{
     alert('Tente novamente')
    }