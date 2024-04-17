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
let idade = 18;

if(idade >= 18){

    console.log(`${usuario} é maior de idade.`);
    
} else {
    console.log(`${usuario} é menor de idade`);

};
