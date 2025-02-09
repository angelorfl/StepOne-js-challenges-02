// Escada. Nesse desafio você vai ter que desenhar uma escada. 
// Para isso escreva uma função chamada ‘staircase’ que recebe como parâmetro um 
// número inteiro 'n', que indica quantos degraus essa escada vai ter. 
// A base e a altura devem ser igual a 'n', o desenho deve ser feito usando # e espaços.

// DICA: você pode usar o método de string repeat(). Dê uma pesquisada sobre ;)

// Esse desafio foi dado em um code challenge para entrevista de emprego! :)

// Exemplo:

// quando 
// n= 6;

// output deve ser:
//      #
//     ##
//    ###
//   ####
//  #####
// ######

function staircase(n) {
	let line = '';
	for (let i = 1; i < n + 1; i++) {
		line = " ".repeat(n - i) + "#".repeat(i);
	console.log(line);
	}
}


// ________________________ TEST ________________________
console.log('TESTS:')
console.log('escada com n=5')
staircase(5);
// ________________________ TEST ________________________