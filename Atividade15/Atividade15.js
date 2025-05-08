const resultado = document.getElementById('resultado');
const btnEnviar = document.getElementById('idEnviar');

btnEnviar.addEventListener('click', () => {
    if (document.getElementById('idSim').checked) {
        resultado.textContent ="Volte sempre à está página!"; 
    } else if (document.getElementById('idNao').checked) {
        resultado.textContent ="Que bom que você voltou a visitar esta página!"
    } else {
        resultado.textContent = 'Por favor, selecione uma opção.';
    }
})

function validarDados() {
    if (document.forms.formulario.elements[0].value == "" || document.forms.formulario.elements[0].value.length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.getElementById("idNome").focus();;
        return false;
    };

    if (document.forms.formulario.elements[1].value == "" || document.forms.formulario.elements[1].value.indexOf('@') == -1 || document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.getElementById("idEmail").focus();
       return false;
    }

    if (document.forms.formulario.elements[2].value == "" || document.forms.formulario.elements[2].value.length < 20) {
        alert("É necessario preencher o campo COMENTÁRIO com mais de 20 caracteres!");
        document.getElementById("idComentario").focus();
        return false;
    }

    return true;
}