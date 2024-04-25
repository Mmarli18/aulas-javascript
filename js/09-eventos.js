`use strict`;

const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");
const pagina = document.querySelector("body");

// Criando um objeto de audio referenciando o arquivo que queremos usar
const efeitoSonoro = new Audio();
efeitoSonoro.src = "wow.wav";

// Criando um ouvinte de evento (Event Listener)
/*   O primeiro parâmetro do addEventListener é o tipo de evento que queremos "ouvir/monitorar". O segundo parâmentro é uma função (conhecida como callback) responsável por executar ações no momento em que o evento acontecer.
Dispara uma ação/evento quando clica no elemento indicado*/

exemplo01.addEventListener("click", function(){
    // Exibindo um texto no parágrafo mensagem
    mensagem.textContent = "Parabéns, Evento acionado com sucesso!";

    // Ativando uma classe para o mensagem
    mensagem.classList.add("destaque");

    // Modificando a fonte da pagina quando clicamos no evento exemplo01
    pagina.style.fontFamily = "Arial";

    // Executando o áudio
    efeitoSonoro.play();

    
});

