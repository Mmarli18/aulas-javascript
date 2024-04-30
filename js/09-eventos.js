`use strict`;

const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");
const video = document.querySelector("video");


// Criando um objeto de audio referenciando o arquivo que queremos usar
const efeitoSonoro = new Audio();
efeitoSonoro.src = "wow.wav";

/* // Se quiser criar referencia de video via JS
const video = document.createElement("video");
video.src = "pink-floyd.mp4";
video.width = 354;
video.height = 196; */

// Criando um objeto de imagem referenciando o arquivo que queremos usar
const imagem = new Image();
imagem.src = "meme.gif";

// Criando um ouvinte de evento (Event Listener)
/*   O primeiro parâmetro do addEventListener é o tipo de evento que queremos "ouvir/monitorar". O segundo parâmentro é uma função (conhecida como callback) responsável por executar ações no momento em que o evento acontecer.
Dispara uma ação/evento quando clica no elemento indicado*/

exemplo01.addEventListener("click", function () {
    // Exibindo um texto no parágrafo mensagem
    mensagem.textContent = "Parabéns, Evento acionado com sucesso!";

    // Ativando uma classe para o mensagem
    mensagem.classList.add("destaque");

    // Modificando a fonte da pagina quando clicamos no evento exemplo01
    pagina.style.fontFamily = "Arial";

    // Executando o áudio
    efeitoSonoro.play();

    // Executando a imagem
    mensagem.insertAdjacentElement("afterend", imagem);

    // Executando o video 
    video.removeAttribute("hidden");
    video.play();

});



/* Exemplo modo noturno */
const divContainer = document.querySelector(".container");
const botao = document.querySelector("#noturno");

botao.addEventListener("click", function () {
    /*     alert("Tricolooooooor"); */
    // Toggle alterna automaticamente entre os estados da classe (usuario clica abre e clica novamente fecha o elemento)
    pagina.classList.toggle("noturno");
    divContainer.classList.toggle("noturno");

    //  1) Aplicar um efeito de mudança de cores suave 

    pagina.style.transition = "1s";
    divContainer.style.transition = "1s"

    //   2) Fazer o botão mudar de texto, ou seja, inicia com o texto ativar e troca para o texto desativar

    // Se o texto do botão tiver escrito ATIVAR então muda para Desativar
    if (botao.textContent == "Ativar") {
        botao.textContent = "Desativar";
        // senão, volte para ATIVAR
    } else {
        botao.textContent = "Ativar";

    }

    /* Solução 2 para alternar Ativar > Desativar
    Foi analisado a classe 
    Se a classe estiver noturno então exibir Desativar
    if(pagina.classList.contains)("noturno") ){
        botao.textContent = "Desativar";
        Senão exibir desativar
    } else {
        botao.textContent = "Ativar";
    }


    */
});



/* Sobre o duplo sinal de igual == e o triplo sinal de igual ===

== IGUALDADE (considera somente valor)

=== IGUALDADE ESTRITA (considera valor e tipo de dado)

*/

let a = 10;
let b = "10";
console.log(a == b);  // true(verdadeiro) valor é igual 10
console.log(a === b); // false (falso) valor é igual 10 porém o tipo de dado é diferente b é uma string

