`use strict`;

/* Funções/métodos mais comuns para seleção de elementos no DOM

- getElementById()
Selecionar um elemento através do atributo ID
Ex: <p id=""</p>

- querySelector()
Seleciona um elemento através de Seletor baseado na lógica CSS
Ex: p { }

- querySeletorAll()
Seleciona vários elementos através de seletor (es) baseado na lógica CSS

*/

// Exemplos 1: getElementById()
const legenda = document.getElementById("legenda");
console.log(legenda);

// Exemplos 2: querySelector()
const titulo = document.querySelector("h1");
console.log(titulo);

const sobreFront = document.querySelector("#sobre");
console.log(sobreFront);

/* Mini Exercícios 
1) Faça o acesso/seleção do h2 de back-end e mostre no console.

2) Faça o acesso/seleção apenas do h2 existente demtrp da div com a classe 'editores' e mostre no console.
*/

// Quando se trata de uma classe usamos (.nomedaclasse)
const backEnd = document.querySelector(".back-end");
console.log(backEnd);

const codigo = document.querySelector(".editores h2");
console.log(codigo);


/* Exemplo 3: querySelectorAll() 
Obs: funciona parecido com a array*/

const subtitutos = document.querySelectorAll("h2");
console.log(subtitutos);

// Selecionando vários elementos
const variosElementos =document.querySelectorAll("p, a, p b, #teste");
console.log(variosElementos);
