const a = 375;
const b = 75;
const c = 500;
const d = -50;
const e = 60;
const f = 60;
const g = 60;

const soma = a + b; //soma
const subtracao = a - b; //subtração
const multiplicacao = a * b; //Multiplicação
const divisao = a / b; //Divisão
const modulo = a % b; //Módulo

//1° - Mostra o resultado aritméticas básicas no terminal
/*console.log(soma, subtracao, multiplicacao, divisao, modulo)*/
console.log("Resultados Aritméticas:");
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Módulo:", modulo);
console.log();

//2° - Compara Dois valores e retornar o maior valor no terminal
console.log("2° - Comparando dois valores:");
if( a > b) {
    console.log("Maior Valor:", a);
}else {
    console.log("Maior Valor:", b);
}
console.log();

//3° - Compara Três valores e retornar o maior valor no terminal
console.log("3° - Comparando três valores:");
if ( a > b && a > c) {
    console.log("Maior valor:", a);
}else if ( b > a && b > c) {
    console.log("Maior valor:", b);
}else {
    console.log("Maior valor:", c);
}
console.log();

//4° - Avaliar se o valor for positivo ou negativo
console.log("4° - Identificar se o valor é positivo, negativo ou zero:");
if ( d > 0) {
    console.log("positivo")
}else if ( d < 0) {
    console.log("negativo")
}else {
    console.log("Zero")
}
console.log();

//5° - Analisando valores dos angulos do triangulo
console.log("5° - Identificando o triangulo");
const angulo = e + f + g;
if ( e < 0 || f < 0 || g < 0) {
    console.log("valor inválido")
}else if ( angulo == 180){
    console.log(true)
} else {
    console.log(false)
}
console.log();

//6° - Receba a peça de xadrez e retorna o movimento:
console.log("6° - Informe a peça e receba o movimento:")
const peca = "Rei"

if ( peca == "cavalo" || peca == "Cavalo" ){
    console.log("Peça:", peca,"- Movimento em:", "L");
}else if ( peca == "torre" || peca == "Torre") {
    console.log("Peça:", peca,"- Movimento em:", "Horizontal ou vertical");
}else if ( peca == "rainha" || peca == "Rainha" ) {
    console.log("Peça:", peca,"- Movimento em:", "Todas as direções, sem limite de casas");
}else if ( peca == "bispo" || peca == "Bispo" ) {
    console.log("Peça:", peca,"- Movimento em:", "Diagonal");
}else if ( peca == "bispo" || peca == "Bispo" ) {
    console.log("Peça:", peca,"- Movimento em:", "Uma casa por vez para frente");
}else if ( peca == "peão" || peca == "Peão" ) {
    console.log("Peça:", peca,"- Movimento em:", "Uma casa por vez para frente");
}else if ( peca == "rei" || peca == "Rei" ) {
    console.log("Peça:", peca,"- Movimento em:", "Todas as direções, somente uma casa");
}else {
    console.log("Valor inválido");
}
console.log();

//7° - Conversões de nota em porcentagem (de 0 a 100) em conceitos de A a F:
console.log("7° - Convertendo nota (0 a 100) para A a F:")
const nota = -1;
if ( nota >= 90){
    console.log("Nota:", "A");
}else if ( nota >= 80 && nota < 90){
    console.log("Nota:", "B");
}else if ( nota >= 70 && nota < 80){
    console.log("Nota:", "C");
}else if ( nota >= 60 && nota < 70){
    console.log("Nota:", "D");
}else if ( nota >= 50 && nota < 60){
    console.log("Nota:", "E");
}else if (nota > 0 && nota < 50){
    console.log("Nota:", "F");
}else if ( nota < 0 || nota > 100){
    console.log("Nota inválida");
}
console.log();

//8° - Retornar True se retorna módulo par é 0, senão retorne false:
const num1 = 20;
const num2 = 15;
const num3 = 10;

console.log("8° - O módulo == 0:")

if ( num1%num2 == 0 || num1%num3 == 0 || num2%num3 == 0){
    console.log(true);
}else {
    console.log(false);
}
console.log();

//9° - Retornar True se retorna módulo ímpar é 1, senão retorne false:
const num4 = 25;
const num5 = 15;
const num6 = 10;

console.log("9° - O módulo == 1:")

if ( num4%num5 == 0 || num4%num6 == 0 || num5%num6 == 0){
    console.log(false);
}else {
    console.log(true);
}