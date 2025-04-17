    function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        document.getElementById('resultadoIMC').innerText = "Por favor, preencha peso e altura corretamente.";
        return;
    }

    const imc = peso / (altura * altura);
    let resultado;

    if (imc < 18.5) {
        resultado = `IMC = ${imc.toFixed(2)} | MAGREZA | OBESIDADE GRAU 0`;
    } else if (imc < 25) {
        resultado = `IMC = ${imc.toFixed(2)} | NORMAL | OBESIDADE GRAU 0`;
    } else if (imc < 30) {
        resultado = `IMC = ${imc.toFixed(2)} | SOBREPESO | OBESIDADE GRAU 1`;
    } else if (imc < 40) {
        resultado = `IMC = ${imc.toFixed(2)} | OBESIDADE | OBESIDADE GRAU 2`;
    } else {
        resultado = `IMC = ${imc.toFixed(2)} | OBESIDADE GRAVE | OBESIDADE GRAU 3`;
    }

    document.getElementById('resultadoIMC').innerText = resultado;
}
