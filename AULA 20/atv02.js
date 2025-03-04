let produtos = [
    {nome: 'teclado', preco: 150, quantidade: 15, cor: 'preto', marca: 'logitech'},
    {nome: 'mouse', preco: 50, quantidade: 15, cor: 'preto', marca: 'logitech'},
    {nome: 'monitor', preco: '500', quantidade: '10', cor: 'branco', marca:'lg' },
    {nome: 'celular', preco: 1500, quantidde: 5, cor: 'prata', marca: 'samsung'}
]

let produtosBlackFraude = produtos.map((item)=>{
let produtoDesconto={
    preco: item.preco * 0.9,
    quantidade: item.quantidade,
    cor: item.cor,
    marca: item.marca
}

return produtoDesconto
}
)
console.log(produtosBlackFraude)
console.log(produtos)