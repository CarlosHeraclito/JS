let vendas = [20000, 30000, 10000, 15000, 25000, 50000, 40000, 30000, 20000, 10000, 15000, 25000]

let funcaoCallback = (acumulador, itemArray) => {
    return acumulador + itemArray
}



let total2024 = vendas.reduce(funcaoCallback)

