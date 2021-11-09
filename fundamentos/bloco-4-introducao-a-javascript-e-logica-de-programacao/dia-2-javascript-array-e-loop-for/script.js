let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*1° - Nesse primeiro exercício, percorra o array imprimindo 
todos os valores nele contidos com a função console.log() ;*/
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("Exercicio 1 - Imprimir valores:")
for ( var i = 0; i < numbers.length; i++) {

	console.log( "Valor", [i], ":", numbers[i]);
}

/* 2° - Para o segundo exercício, some todos 
os valores contidos no array e imprima o resultado;*/
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log();
console.log("Exercicio 2 - Soma:");
var sum = 0;
for ( var i = 0; i < numbers.length; i++) {

	sum += numbers[i];
}
console.log(sum);

/* 3° - Para o terceiro exercício, calcule e 
imprima a média aritmética dos valores contidos no array;*/
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log();
console.log("Exercicio 3 - Média:");
var sum = 0;
for ( var i = 0; i < numbers.length; i++) {

	sum += numbers[i];
}
media = sum / i;
console.log(media);

/*4° - Com o mesmo código do exercício anterior, caso o valor final 
seja maior que 20, imprima a mensagem: "valor maior que 20". 
Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log();
console.log("Exercicio 4:");
var sum = 0;
for ( var i = 0; i < numbers.length; i++) {

	sum += numbers[i];
}
media = sum / i;
if ( media > 20){
	console.log ( "Valor maior que 20");
} else {
	console.log("Valor menor que 20");
}

/* 5° - Utilizando for , descubra qual o maior valor contido no 
array e imprima-o;*/
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log();
console.log("Exercicio 5 - Maior valor:");
var maior = 0;
for ( let i = 0; i < numbers.length; i++) {

	if( numbers[i] > maior){
		maior = numbers[i]
	}
}
console.log(maior)

/*6° - Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";*/
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log();
console.log("Exercicio 6 - Qtde Ímpar:");
var qtde = 0;
for ( let i=0; i < numbers.length; i++){
	if( numbers[i]%2 != 0){
		qtde+=1
	}
}
console.log(qtde);

/*7° - Utilizando for , descubra qual o menor valor contido no array e imprima-o;*/
console.log();
console.log("Exercicio 7 - Menor Valor:");
var menor = 10;
for ( let i = 0; i < numbers.length; i++) {

	if( numbers[i] < menor){
		var menor = numbers[i];
	}
}
console.log(menor)

/*8° - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;*/
//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log();
console.log("Exercicio 8 - Criar array e Imprimi-la:");
let value = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 55, 65, 80, 110, 38, 45, 6, 13, 21, 20, 48, 50, 90, 150, 132, 99];
for(var i = 1; i < 26; i++){
	console.log(value[i]);
}

/* 9° - Utilizando o array criado no exercício anterior imprima o resultado da divisão 
de cada um dos elementos por 2.*/
console.log();
console.log("Exercicio 9 - Criar array com o resultado da divisão por 2:");
let resultadoDiv = [];
for(var i = 0; i < value.length; i++){
	resultadoDiv.push(value[i] / 2);
}

for(var i = 0; i < resultadoDiv.length; i++){
	console.log(resultadoDiv[i]);
}