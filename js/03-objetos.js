`use strict`;

// Declarando um objeto, usamos colchetes {}

// Titulo é uma propriedade: senhor dos aneis é um valor
const livro = {
    titulo: "Senhor dos anéis", 
    autor: "J.R.R Tolkien",
    volumes: 3,
    ano: 1954

}

console.log(livro);

// para mostrar apenas uma propriedade usamos o ponto (.)
console.log(livro.titulo);

// Para mostrar uma frase + propriedade

console.log(

`${livro.titulo} foi criado
por ${livro.autor}`

);

const carro = {
    marca: "GM",
    modelo: "Corsa Sedan",
    anoDeFabricacao:"2003",
    quantidadeDePortas: "4",
    cor: "Prata",
    opcionais: ["Ar-condicionado", "Vidros Eletricos", "Alarme"]
}

console.log(carro);

console.log(

`O ${carro.marca} ${carro.modelo} fabricado em ${carro.anoDeFabricacao} com ${carro.quantidadeDePortas} portas e com ${carro.opcionais} , foi um famoso carro no Brasil.`
);

