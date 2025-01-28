let cor = prompt()
cor = cor.toLowerCase(minuscula)

while(cor != 'verde' && cor!= 'amarelo' && cor != 'azul' && cor != 'vermelho'){
cor = prompt('Você digitou uma cor não valida, digite novamente: \n Verde \n Amarelo \n Azul  \n Vermelho')
}

console.log('cor da etiqueta' + cor)