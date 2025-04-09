
function mostrarNumMaior(){
    const num1= parseInt(document.getElementById('num1').value)
    const num2= parseInt(document.getElementById('num2').value)
    const num3= parseInt(document.getElementById('num3').value)
    const maior = maiorNumero(num1,num2,num3)
    document.getElementById('maiorNumero').innerText = `O maior número é: ${maior}`;
}

function maiorNumero(num1, num2, num3){
    return maior = Math.max(num1,num2,num3)

}

function ordemCrescente(){
    const num1= parseInt(document.getElementById('num1').value)
    const num2= parseInt(document.getElementById('num2').value)
    const num3= parseInt(document.getElementById('num3').value)
    const ordem = [num1, num2, num3].sort((a, b) => a - b);
    document.getElementById('resultadoOrdem').innerText = `A ordem crescente é: ${ordem.join(' ,')}`;
}

function verificarPalindromo() {
    const str = document.getElementById('palindromo').value;
    const Palin = Palindromo(str);
    document.getElementById('resultadoPalindromo').innerText = Palin 
        ? `"${str}" é um palíndromo.` 
        : `"${str}" não é um palíndromo.`;
}

function Palindromo(str) {
    const text = str.toUpperCase().replace(/[^A-Z0-9]/g, '');
    return text === text.split('').reverse().join('');
}

function mostrarTipoTriangulo() {
    const lado1 = Number(document.getElementById('lado1').value);
    const lado2 = Number(document.getElementById('lado2').value);
    const lado3 = Number(document.getElementById('lado3').value);
    const tipo = tipoTriangulo(lado1, lado2, lado3);
    document.getElementById('resultadoTriangulo').innerText = tipo;
}

function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            return "Triângulo Equilátero";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            return "Triângulo Isósceles";
        } else {
            return "Triângulo Escaleno";
        }
    } else {
        return "Os lados não formam um triângulo.";
    }
}