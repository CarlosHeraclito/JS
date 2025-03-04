let filanormal = ['carlos', 'maria', 'joao', 'pedro', 'jose', 'joana', 'junior', 'julio', 'juliana', 'josefina']

let filapreferencial = ['joaquina', 'josefina', 'josephine', 'joseph', 'josephina', 'bruna', 'helana', 'henrique', 'henriqueta', 'henriquezinha']


let filaatendidos = []

for (let i = 0; i < 8; i++){
    let retirado = filanormal.shift()
    filaatendidos.push(retirado.shift)
    console.log(filanormal)
    console.log(filaatendidos)
}


for (let i = 0; i < 3; i++){
    let retirado = filapreferencial.pop()
    filaatendidos.push(retirado.pop)
    console.log(filapreferencial)
    console.log(filaatendidos)
}

