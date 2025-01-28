let N = Number(prompt('digite a quantidade de alunos'))

let somanotas = 0
let media = 0

for(let i = 1; i <=N; i++){
    let nota = parseFloat(prompt('Digite a nota do aluno' + i))
    console.log('Nota do aluno' + i + '' + nota)
    somanotas += nota
}

media = somanotas / N
console.log(`A media das notas é ${media}`)