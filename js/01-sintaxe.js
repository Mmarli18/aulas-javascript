/* Habilitando o modo estrito da linguagem 
        Ao fazer isso, a linguagem passa a analisar se você declarou variáveis e não está usando palavras-reservadas. Se isso acontecer, erros serão exibidos.*/
'use strict';

// Comentario de apenas uma linha (crtl + ;)
/* Comentario de multiplas linhas (Shift + Alt + A) */

// Comando de saída de dados
console.log("Hello Word!");

/* Manipulação de dados */

// Usamos Let para declarar variave

// Variaveis (valores podem ser modificados)
let curso = "HTML5 e CSS3";  //string, literal (entre aspas)
let ano = 2024; //números (inteiro/real), sem aspas

//  variavel sem valor definido
let disciplina;
console.log(disciplina);

disciplina = "Lógica";
console.log(disciplina);

// Constantes (valores fixos que não ser modificados)
const escola = "Senac Penha"

// Constantes SEMPRE devem ter valor
const materia = "Português"

// Saída de dados
console.log(curso);
console.log(ano);
console.log(escola);

let nomedavariavel = "Algum valor"
console.log(nomedavariavel);

/* Palavras-chaves de uso reservado: public, implements, private, arguments */
// let public = "Palavra reservada";
// console.log(public);

/* Saída de dados ´personalizada */
/* Estou fazendo o curso de HTML5 e CSS3 no Senac Penha */

// CONCATENAÇÃO (forma mais antiga/tradicional)
console.log("Estou fazendo o curso de " + curso + " no " + escola + ".");

// TEMPLETA LATERAL/STRING (forma mais moderna)
console.log(`Estou fazendo o curso de ${curso} no ${escola}.`);

// Montando a frase antes de dar saída nela
let mensagem = `Estou fazendo o curso de ${curso} no ${escola}.`;

// Dando saída a frase já montada
console.log(mensagem);

/* Operações matemáticas básicas */
let valor1 = 10; // inteiro 
let valor2 = 5; // inteiro
let valor = 1200.55; // decimal/quebrado usando . para casa decimal

// Operações
let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

console.log("Soma: " + soma);
console.log("Subtracao: " + subtracao);
console.log("Multiplicacao: " + multiplicacao);
console.log("Divisao: " + divisao);