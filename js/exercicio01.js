`use script`;


let nota1 = 1;
let nota2 = 3;

const media = (nota1 + nota2) / 2;

console.log(media);

if (media >= 7) {
    console.log("APROVADO");
} else if (media >= 5) {
    console.log("RECUPERAÇÃO");
} else {
    console.log("REPROVADO");
}

