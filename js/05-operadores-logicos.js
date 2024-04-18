`use script`;

// Requisitos para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

//  Aluno de exemplo
let aluno = "Dayane";
let mediaFinal = 7;
let faltas = 2;
let resultado;

// Operador E (And $$) 
if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
    resultado = "APROVADO";
} else {
    resultado = "REPROVADO";
}

console.log(resultado);