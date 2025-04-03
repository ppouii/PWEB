function jokenpo(jogada){
    var aleatorio = Math.floor(Math.random()*3) + 1;

    jogada == 1 ? alert("Você escolheu pedra") : jogada == 2 ? alert("Você escolheu tesoura") : jogada ==3 ? alert("Você escolheu papel"): null;
    aleatorio == 1 ? alert("PC escolheu pedra") : aleatorio == 2 ? alert("PC escolheu tesoura") : aleatorio ==3 ? alert("PC escolheu papel"): null;
    
    if(jogada == aleatorio){
        alert('Empate');
    }
    else if( jogada == 2 && aleatorio == 1){
        alert("PC Venceu");
    }
    else if(jogada == 1 && aleatorio == 2 ){
        alert('Você Venceu');
    }
    else if(jogada == 3 && aleatorio == 1){
        alert('Você Venceu');
    }
    else if(jogada == 1 && aleatorio == 3){
        alert('PC Venceu');
    }
    else if(jogada == 3 && aleatorio == 2){
        alert('PC Venceu');
    }
    else
    alert('Você Venceu');
}