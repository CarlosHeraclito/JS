let produto = {
    nome: ' teclado',
    preco: 150,
    quantidade: 15,
    cor: 'preto'
}

for (let propriedade in produto){
    console.log(produto[propriedade])
}