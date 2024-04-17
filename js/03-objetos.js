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
    anoDeFabricacao: "2003",
    quantidadeDePortas: "4",
    cor: "Prata",
    // Opcionais é uma propriedade como arrays
    opcionais: ["Ar-condicionado", "Vidros Eletricos", "Alarme"]
}

console.log(carro);

console.log(

    `O ${carro.marca} ${carro.modelo} fabricado em ${carro.anoDeFabricacao} com ${carro.quantidadeDePortas} portas e com ${carro.opcionais[1]}, foi um famoso carro no Brasil.`
);

// Objeto com arrays e outro objeto

const pessoa = {
    nome: "Chapolin Colorado",
    idade: 20,
    /*Obs: usamos aspas neste caso pois não se trata de numero matemáticos ou monetários.  */
    telefone: ["11-2135-0300", "11-96333-6666"],

    // Propriedade como objeto
    medidasFisicas: {
        peso: 75,
        altura: 1.66
    }
};

console.log(pessoa);

console.log(
    ` O ${pessoa.nome} tem ${pessoa.medidasFisicas.peso}kg e ${pessoa.medidasFisicas.altura}m de altura. Contato ${pessoa.telefone[1]}.
`
);

// Arrays de objetos

const livros = [
    {
        titulo: "Harry Potter",
        autor: "J.K. Rowling"
    },

    {
        titulo: "Crônicas de Nárnia",
        autor: "C.S. Lewis"
    },

    {
        titulo: "Crônicas de Olam",
        autor: "L.L. Wurlitzer"

    }

];

// Cronicas de Narnia
console.log(livros[1].titulo); 

console.log("--------------------");

console.table(livros);

/* A alternativa para exibição e analise de arrays */