`use strict`

let cotacaoDoDia = 5.16;
let valorEmDolar = 1000;


function converterEmReais(valor) {
    return cotacaoDoDia * valorEmDolar;
}

function formatarEmMoeda(valor, siglaDaMoeda, localizacao) {
    const opcoes = {
        style: "currency",
        currency: siglaDaMoeda
    };

    return new Intl.NumberFormat(
        localizacao, opcoes).format(valor);
}

// Versão sem formatação
console.log(converterEmReais(valorEmDolar));

// Versão 1 (com formatação)
console.log(
    formatarEmMoeda(converterEmReais(valorEmDolar),"BRL","pt-br")
);

console.log( formatarEmMoeda(valorEmDolar, "USD", "en")
);
