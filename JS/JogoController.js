class JogoController{

    comeca(){
        event.preventDefault();
            var formComeca= document.getElementById("formComeca");
            var formJogo= document.getElementById("formJogo");
            var perguntas = new Perguntas();

            formComeca.classList.add("esconde");
            perguntas.montaPergunta();
            formJogo.classList.remove("esconde");
            

    }

}