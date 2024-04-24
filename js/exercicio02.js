`use strict`;

/* Criar arrays [dentro criar 3 objetos {dentro do objeto colocar as informações solicitadas no exercicio id e nome},]   */

const clientes = [ 
    { id: 1, nome:"Goku"},
    { id: 2, nome:"Naruto"},
    { id: 3, nome:"Shiryu"}
    ];
/* Criando loop usando FOR -  */

// Armazenando em cache (memoria) o tamanho da array antes de iniciar o loop evitando contar todas as vezes as informações armazenadas
let quantidade = clientes.length;

for( let i = 0; i < quantidade; i++ ){
    console.log(`cliente: ${clientes[i].nome} (id: ${clientes[i].id})`);
}

/* clientes.length = contagem 

i++ serve para interromper o loop

para testar no console console.log( i );
*/


console.log("---------------");

// Versão For OF
for(let cliente of clientes){
console.log(`Cliente: ${cliente.nome} (id: ${cliente.id})`);
}


