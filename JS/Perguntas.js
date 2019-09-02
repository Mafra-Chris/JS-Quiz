class Perguntas{
    todasRespostas = [{
        pergunta: 'Qual a capital do Canadá?',
        escolhas: ['Toronto', 'Ottawa', 'Vancouver', 'Quebec'],
        respostaCorreta: 1
    },
    {
        pergunta: 'Qual foi o campeão da nba da temporada 2018-2019?',
        escolhas: ['Toronto Raptors', 'Golden State Warriors', 'Los Angeles Lakers', 'Chicago Bulls'],
        respostaCorreta: 0
    },
    {
        pergunta: 'Qual o nome do baterista da banda Beatles?',
        escolhas: ['George Harrison', 'John Lennon', 'Ringo Starr', 'Paul McCartney'],
        respostaCorreta: 2
    },
    {
        pergunta: 'Segundo o filme Guia do mochileiro das galáxias o que não pode faltar para um mochileiro?',
        escolhas: ['Água', 'Cobertor', 'Mochila', 'Toalha'],
        respostaCorreta: 3
    },
    {
        pergunta: 'Qual o planeta natal de Spock, o ser lógico da série e saga de filmes "Star Trek"?',
        escolhas: ['Vulcano', 'Terra', 'Asgard', 'Spocklândia'],
        respostaCorreta: 0
    }];

    numeroPergunta = 0;
    pontos = 0;

    montaPergunta(){
        document.getElementById("nPergunta").textContent = "Pergunta: " + (this.numeroPergunta+1) + "/5";
        document.getElementById("pergunta").textContent = this.todasRespostas[this.numeroPergunta].pergunta;
        var labels = document.getElementsByTagName("label");
        
        for(var i = 0; i < labels.length; i++) {
            labels[i].innerHTML = this.todasRespostas[this.numeroPergunta].escolhas[i];
        }
    }

    proximaPergunta(){
        event.preventDefault();
        var formJogo= document.getElementById("formJogo");

        this.contaPontos();
        this.numeroPergunta++;
            
        if(this.numeroPergunta < 5){
            this.montaPergunta();
        }else{
            this.mostraPontos();
        }   
         
        formJogo.reset();
        console.log(this.numeroPergunta);
    }

    contaPontos(){
        var respostas = document.getElementsByClassName("radio");
        for(var i = 0; i < respostas.length; i++){
            if(respostas[i].checked){
                var respostaValue = respostas[i].value;
            }
        }
            if(respostaValue == this.todasRespostas[this.numeroPergunta].respostaCorreta){
                this.pontos++;             
            }    
    }

    mostraPontos(){
        var formJogo = document.getElementById("formJogo");
        var divJogo = document.getElementById("jogo");
        var pontuacao = `<h3 class = "text-center">Pontuação: ${this.pontos}</h3>`;

        formJogo.classList.add("esconde");
        divJogo.innerHTML = pontuacao;
    }
}