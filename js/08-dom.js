`use strict`;

/* Funções/métodos mais comuns para seleção de elementos no DOM

- getElementById()
Selecionar um elemento através do atributo ID
Ex: <p id=""</p>

- querySelector()
Seleciona um elemento através de Seletor baseado na lógica CSS
Ex: p { }

- querySeletorAll()
Seleciona vários elementos através de seletor (es) baseado na lógica CSS

*/

// Exemplos 1: getElementById()
const legenda = document.getElementById("legenda");
console.log(legenda);

// Exemplos 2: querySelector()
const titulo = document.querySelector("h1");
console.log(titulo);

const sobreFront = document.querySelector("#sobre");
console.log(sobreFront);

/* Mini Exercícios 
1) Faça o acesso/seleção do h2 de back-end e mostre no console.

2) Faça o acesso/seleção apenas do h2 existente demtrp da div com a classe 'editores' e mostre no console.
*/

// Quando se trata de uma classe usamos (.nomedaclasse)
const backEnd = document.querySelector(".back-end");
console.log(backEnd);

const codigo = document.querySelector(".editores h2");
console.log(codigo);


/* Exemplo 3: querySelectorAll() 
Obs: funciona parecido com a array*/

const subtitutos = document.querySelectorAll("h2");
console.log(subtitutos);

// Selecionando vários elementos
const variosElementos =document.querySelectorAll("p, a, p b, #teste");
console.log(variosElementos);

// Modificando o Dom - Podemos alterar o conteudo, tags, estilos, criar elementos, remover elementos etc.

// Alteração de conteúdo textual
legenda.textContent = "Imagem do modelo de objetos do documento";

// Alterar conteudo com suporte à tags
sobreFront.innerHTML = "<i>Front-End</i>";

// Alteração de estilos inline (CSS)
backEnd.style.color = "red";
backEnd.style.textAlign = "center";

// Aplicação de classes CSS via JavaScript
titulo.classList.add("destaque");

const listaDeEditores = [
    {
        nome: "Visual Studio Code",
        finalidade: "Desenvolvimento web em geral"
    },
    {
        nome: "Android Studio",
        finalidade: "Desenvolvimento de aplicações Android"
    },
    {
        nome: "Xcode",
        finalidade: "Desenvolvimento de aplicações iOS"
    }
];

// Acessando/selecionando a lista que será usada no HTML

const lista = document.querySelector(".lista");
console.log(lista);

// Percorrer (loop) o array de listaDeEditores, criar os itens <li> com conteudos do array e adiciona-los à lsita HTML.

// For (antes do OF - variavel/constante de acesso dar o nome que quiser)
// após OF - array que criarmos anteriormente

for (const editor of listaDeEditores) {
    // Etapa 1: Criar elemento <li>
    const item = document.createElement("li");

    // Etapa 2: adicionar conteudo ao novo elemento (ex: tag negrito <b>)
    item.innerHTML = `<b>${editor.nome}</b>: ${editor.finalidade}`;

    // Etapa 3: adicionar o elemento à lista <ol>
    lista.appendChild(item);
    
}