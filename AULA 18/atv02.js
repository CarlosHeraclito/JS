let notas = [10, 8, 7, 5, 9]
let somanotas = 0
let media = 0

for(let i = 0; i < notas.length; i++){
    somanotas += notas[i]
    console.log(notas[i])
}

media = Number(somanotas/(notas.length))+
console.log(media)

