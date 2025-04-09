const respostas = [];

document.getElementById("pesquisa").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const idade = parseInt(document.getElementById("idade").value);
    const genero = document.getElementById("genero").value;

    const radios = document.getElementsByName("opiniao");
    let opiniao;
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            opiniao = radios[i].value;
            break; 
        }
    }

    respostas.push({ idade, genero, opiniao });

    atualizaResult();
});

function atualizaResult() {
    let somaIdades = 0;
    let idadeMaisVelha = 0;
    let idadeMaisNova = 0;
    let totalOtimo = 0;
    let totalBom = 0;
    let totalMasculino = 0;
    let totalFeminino = 0;
    let totalOutro = 0;

    for (const resposta of respostas) {
        somaIdades += resposta.idade;
        if (resposta.idade > idadeMaisVelha) {
            idadeMaisVelha = resposta.idade;
        }
        if (resposta.idade < idadeMaisNova) {
            idadeMaisNova = resposta.idade;
        }

        if (resposta.opiniao === "4") totalOtimo++;
        if (resposta.opiniao === "3") totalBom++;
        if (resposta.genero === "masculino") totalMasculino++;
        if (resposta.genero === "feminino") totalFeminino++;
        if (resposta.genero === "outro") totalOutro++;
    }

    const totalRespostas = respostas.length;
    const mediaIdade = somaIdades / totalRespostas;
    const porcentagemOtimo = ((totalOtimo / totalRespostas) * 100).toFixed(2);
    const porcentagemBom = ((totalBom / totalRespostas) * 100).toFixed(2);

    const resultadosDiv = document.getElementById("resultado");
    resultadosDiv.innerHTML = `
        <p>Total de Respostas: ${totalRespostas}</p>
        <p>Média de Idade: ${mediaIdade ? mediaIdade.toFixed(2) : 0}</p>
        <p>Idade da Pessoa Mais Velha: ${idadeMaisVelha ? idadeMaisVelha : 0}</p>
        <p>Idade da Pessoa Mais Nova: ${idadeMaisNova ? idadeMaisNova : 0}</p>
        <p>Porcentagem de "Ótimo": ${porcentagemOtimo}%</p>
        <p>Porcentagem de "Bom": ${porcentagemBom}%</p>
        <p>Total de Homens: ${totalMasculino}</p>
        <p>Total de Mulheres: ${totalFeminino}</p>
        <p>Total de Outros: ${totalOutro}</p>
    `;
}