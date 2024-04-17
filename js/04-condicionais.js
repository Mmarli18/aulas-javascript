`use strict`;

/* comando utilizados em condicionais 
if (se)
else (senao)
else if (senão se)

Switch/case (escolha/caso)

Operadores relacionais:
> MAIOR QUE
< MENOR QUE
>= MAIOR OU IGUAL
<= MENOR OU IGUAL
!= DIFERENÇA
== IGUALDADE
*/

// Condicional Simples

let numero = 10;

if(numero > 5){
    console.log("Mensagem exibida pois a condição é verdadeira!");
}

// Condicional composta

let usuario = "Ozzy Osbourne";
let idade = 60;

// Variavel com proposito de guardar a palavra "maior ou menor"
 let texto; // undefined/indefinida

if(idade >= 18){
    texto = "maior";
} else {
    texto = "menor";
}

console.log(`${usuario} é ${texto} de idade.`);

console.log("if/else usando termário ?:");
let texto2 = idade >= 18 ? "maior" : "menor";

console.log(`${usuario} é ${texto2} de idade.`);


// Condicional Encadeada/Sucessiva

let texto3; 
if(idade >= 60){
    texto3 = "idoso(a)";
}else if(idade >=18){
        texto3 = "adulto(a)";
}else {
    texto3 = "menor de idade";
}

console.log(`${usuario} tem ${idade} anos e é ${texto3}`);


