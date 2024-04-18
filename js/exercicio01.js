`use script`;


let nota1 = 10;
let nota2 = 5;

const media = (nota1 + nota2) / 2;

console.log(media);

if (media >= 7) {
    console.log("APROVADO");
} else if (media >= 5) {
    console.log("RECUPERAÇÃO");
} else {
    console.log("REPROVADO");
}

