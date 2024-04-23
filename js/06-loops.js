`use strict`;

/* Loops tradicionais mais usados:
- while (enquanto)
- for (para)

Normalmente, os loops são controlados através de uma variavel contadora ou de alguma condição lógica para que o loop seja interrompido.
*/

// Loop WHILE

let contador = 1;

//  Operador (++) soma
/* 
while(contador <=5){
    console.log("Valor do contador: "+contador);
    contador++;
}
*/

//  Loop FOR
/*
for(let i =1; i <=10; i++){
     console.log("Contador vale: "+i);
 }


 Obs: Normalmente, variaveis de controle de repetição são chamados de "i", "j", "k".  */

// Loop para acessar arrays

const alunos = ["Chaves", "Chapolin", "Seu Madruga", "Kiko", "Jaiminho", "Bruxa do 71"];

/*
for(let i =0; i < alunos.length; i++ ){
    console.log(alunos[i]);
} */

// Loop exclusivo dp JS para arrays for/of - acessando cada aluno dentro do array alunos
for( const aluno of alunos ){
    console.log(aluno);
}

// Loop exclusivo do JS para objetos: for/in

const livro = {
    titulo: "HTML5",
    autor: "Maujor",
    site: "http://maujor.com",
    ano: 2016
};

console.log("--------------");

for(const prop in livro){
    console.log(livro[prop]);

}
