
// ATIVIDADE 01
let contabancaria = {titular: 'carlos',
    tipo: 'conta corrente',
    saldo: 1000,
    limite: 500,
    debito: true,

}

console.log(`O titular da conta é ${contabancaria.titular} tem saldo de Rs.${contabancaria.saldo} e o limite de debito é de RS.${contabancaria.saldo} e o limite para emprestimos é de RS.${contabancaria.limite}`)


// ATIVIDADE 02

let contabancaria02 = 
{titular: 'carlos',
    tipo: 'conta corrente',
    saldo: 1000,
    limite: 500,
    debito: false
}

contabancaria.sacar = function (valor){
    if(contabancaria.saldo >= valor){
        contabancaria.saldo -= valor
        console.log(`Saque de RS.${valor} realizado com sucesso!`)
    
    }else{
        console.log('Saldo insuficiente')
    }

}

contabancaria.depositar = (valor) => {
    contabancaria.saldo += valor
    console.log(`Deposito de RS.${valor} realizado com sucesso!`)
}

contabancaria.consultarsaldo = () => {
    console.log (`o saldo atual da conta é ${contabancaria.titular} é de R$ ${contabancaria.saldo}`)
if(contabancaria.debito){
    console.log('conta com debito')
}

else{
    console.log('conta sem debito')
}
}


