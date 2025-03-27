
var nome = prompt('Qual o seu nome?');
var nota1 = parseFloat(prompt('Digite a Primeira nota:'));
var nota2 = parseFloat(prompt('Digite a Segunda nota:'));
var nota3 = parseFloat(prompt('Digite a Terceira nota:'));
var nota4 = parseFloat(prompt('Digite a Quarta nota:'));

media = (nota1+ nota2 + nota3+ nota4) / 4; 

alert("Aluno: " +nome +"\nMedia Final: "+ media );