`use strict`;

// Sintaxe 1: função anonima
const exemplo1 = function () {
    console.log("Função anônima");

};

// Chamando a função
exemplo1();

// Sintaxe 2: função nomeada/declarada
function exemplo2() {
    console.log("Função nomeada/declarada");
}

exemplo2();

// Sintaxe 3: Arrow Function (Função flecha/seta)
const exemplo3 = () => {
    console.log("Arrow Function");

};

exemplo3();

/*  
 Funções em qualquer sintaxe, tembém podem trabalhar com parâmetros/argumentos. Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe parametros/argumentos entre os parênteses. 
 Geralmente, ao término do processamento dos parâmetros, a função retorna para fora um resultado.   */

/* Exemplos diversos */
//  Função com parâmetros
function somar(valor1, valor2) {
    return valor1 + valor2;
}

//  Chamamos varias vezes com valores diferentes
console.log(somar(10, 5));
console.log(somar(1, 100));
console.log(somar(2.5, 8.9));

console.log("-----------------------");

//  Formatação de valores monetarios em reais
let preco = 5000;
let desconto = preco * 0.10;
let precoFinal = preco - desconto;



function formatarValor(valor) {
    return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valor);
}

console.log(`Preço: ${formatarValor(preco)}`);
console.log(`Desconto: ${formatarValor(desconto)}`);
console.log(`Preço Final: ${formatarValor(precoFinal)}`);

console.log("------------------");

/* Sobre a sintaxe 3: Arrow function 
Sintaxe moderna para funções no javascript, bastante usada em bibliotecas/frameworks como react, react native, angular, Vue etc...

A sintaxe geral é:

const algumNome = () => {};

No entanto, esta sintaxe pode ser simplificada em alguns casos.
*/

// Versão 1
/* function dobra(valor){
    return valor *2;
} */

// Versão 2 (arrow function)
/* const dobra = (valor) =>{
return valor * 2;
} */

// Versão 3 (arrow function com retorno implicito)
const dobra = valor => valor *2;


// Chamada
console.log( dobra(10));
console.log( dobra(55));
console.log( dobra(1278.99));

console.log("---------------------");

// Funções como métodos/comportamentos de objetos
let pessoa = {
    nome: "Fulano",
    idade: 17,
    verificaIdade(){
        if(pessoa.idade >=18){
        return "maior";
        }else {
            return "menor"

        }
    }
};

console.log(pessoa.nome);
console.log(`É ${pessoa.verificaIdade()}`);