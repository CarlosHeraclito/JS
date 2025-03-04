let preçosProdutos = [150, 280, 50, 100, 200, 300, 400, 500, 600, 700]

function inforPrecos(valor){
    
    console.log(`Ovalororiginal do produto é R$ ${valor}`);
    console.log(`Para pagamentos á vista, o valor com desconto de 10% é R$ ${valor - (valor * 0.1)}`);
    console.log(`Para parcelamento terá um acréscimo de 15% no valor do produto, ficando R$ ${valor + (valor * 0.15)}`);
}

preçosProdutos.forEach(inforPrecos)