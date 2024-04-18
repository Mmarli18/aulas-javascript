`use script`;

// Requisitos para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

//  Aluno de exemplo
let aluno = "Dayane";
let mediaFinal = 7;
let faltas = 2;
let resultado;

// Operador E (And $$) Ambos resultados precisam ser verdadeiros
if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
    resultado = "APROVADO";
} else {
    resultado = "REPROVADO";
}

console.log(resultado);


console.log("------------");

let idade = 60;

// Operador OU, OR (||)  Obs o simbolo | é chamado PIPE
// Apenas um resultado precisa ser verdadeiro

if(idade >=18 || idade < 12){
    console.log("Você é um adulto ou criança");
} else {
    console.log("Você é um adolescente");
}

// sinal == (comparação)
let onibus = 2203; //2203 ou 2019
if (onibus ==2203 ||onibus == 2019){
 console.log("Passar no senac, embarquei");
} else {
    console.log("Não passa no Senac, aguarde");
}