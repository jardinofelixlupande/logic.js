//Números aleatórios de 0 a 10!
//nA = Numeros Aleatórios
let nA = Math.floor(Math.random() * 10);
let nA2 = Math.floor(Math.random() * 10);

//CALCULADORA SIMPLES. Versão portuguesa
//-----------------------------------------------------------------

function soma(num1, num2) {
    let resultado = num1 + num2;
    return `A soma de ${num1} e ${num2} é: ${resultado}`;
};
console.log(soma(nA, nA2)); //Retorna ' 1 '

//-----------------------------------------------------------------
function subtracao(num1, num2) {
    let resultado = num1 - num2;
    return `A diferença de ${num1} e ${num2} é: ${resultado}`;
};
console.log(subtracao(nA, nA));// Retorna ' 2 '

//-----------------------------------------------------------------
function multiplicacao(num1, num2) {
    let resultado = num1 * num2;
    return `O produto de ${num1} e ${num2} é: ${resultado}`;
};
console.log(multiplicacao(1, 3)); // Retorna ' 3 '

//-----------------------------------------------------------------
function divisao(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    let resultado = num1 / num2;

    if (resultado % 1 === 0) {
        return `O quociente de ${num1} e ${num2} é: ${resultado}`
    } else {
        return `O quociente de ${num1} e ${num2} é: ${resultado.toFixed(2)}`;
    };
};
console.log(divisao(nA, nA2)); //Retorna ' 4 '
console.log(divisao(nA, 0));//Dividido por 0, retorna "Error"

//-----------------------------------------------------------------

//Raiz quadrada
function raizQ(num) {
    if (num < 0) {
        return "Não há uma solução real para raíz quadrada de um nùmero negativo";
    }
    let resultado = Math.sqrt(num);

    if (resultado % 1 === 0) {
        return `A raíz quadrada de ${num} é: ${resultado}`;
    }
    return ` A raíz quadrada de ${num}, é imperfeita: ${resultado.toFixed(3)}`;
};
console.log(raizQ(nA)); //Retorna ' 5 ';

//-----------------------------------------------------------------

//Raiz cúbica
function raizC(num) {

    let resultado1 = Math.cbrt(num);
    let resultado2 = resultado1.toFixed(3);
    return resultado2;
};
console.log(raizC(nA)); // Retorna os primeiros quatro digitos(4.327)

//-----------------------------------------------------------------
