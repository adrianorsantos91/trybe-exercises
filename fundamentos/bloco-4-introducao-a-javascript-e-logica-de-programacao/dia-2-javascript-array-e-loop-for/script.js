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

for ( let i = 0; i < numbers.length; i++) {

	for ( let y = 0; y < numbers.length; y++){
			
			if (numbers[i] > numbers[y]){
				var maior = numbers[i];
			}
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
console.log(qtde)