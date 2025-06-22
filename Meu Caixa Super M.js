//Começar com Listas DE Produtos (Nome e Preços)//
const produtos = [
    { nome: "Camisa", preco: 25 },
    { nome: "Tênis", preco: 80 },
    { nome: "Relógio", preco: 120 },
    { nome: "Caneca", preco: 158 },
    { nome: "Livro", preco: 32 }
];

// FunÇão para Calcular o Total e Aplicar os Descontos//
function calcularTotal(produtos) {
    let totalSemDesconto = 0;
    let totalComDesconto = 0;

    produtos.forEach(produto => {
        totalSemDesconto += produto.preco;

        if (produto.preco > 30) {
            const comDesconto = produto.preco * 0.9;
            totalComDesconto += comDesconto;
        }

        else {
            totalComDesconto += produto.preco;
        }
    });

    return {
        totalSemDesconto,
        totalComDesconto,
        descontoTotal: totalSemDesconto - totalComDesconto
    };
}

produtos.forEach(function (produto,) {
    console.log(`Nome: ${produto.nome} Preço: ${produto.preco}`)
});

//Exibir REsultados da Compra//

const resultado = calcularTotal(produtos);
console.log("Total sem Desconto: R$", resultado.totalSemDesconto.toFixed(2));

console.log("Total com Desconto: R$", resultado.totalComDesconto.toFixed(2));

console.log("Desconto Aplicado: R$", resultado.descontoTotal.toFixed(2));