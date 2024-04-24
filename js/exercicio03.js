`use strict`

let cotacaoDoDia = 5.16;
let valorEmDolar = 1000;


function converterEmReais(valor) {
    return cotacaoDoDia * valorEmDolar;
}

function formatarEmMoeda(valor, siglaDaMoeda) {
    const opcoes = {
        style: "currency",
        currency: siglaDaMoeda
    };

    return new Intl.NumberFormat(
        "pt-br", opcoes).format(valor);
}

// Versão sem formatação
console.log(converterEmReais(valorEmDolar));

// Versão 1 (com formatação)
console.log(
    formatarEmMoeda(converterEmReais(valorEmDolar),"BRL")
);

console.log( formatarEmMoeda(valorEmDolar, "USD")
);