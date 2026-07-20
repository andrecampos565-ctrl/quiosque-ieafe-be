// Retorno automático do Quiosque IEAFE BE

let tempo;

function reiniciarTemporizador(){

    clearTimeout(tempo);

    tempo = setTimeout(function(){

        window.location.href = "index.html";

    }, 60000);

}


document.addEventListener(
"touchstart",
reiniciarTemporizador
);


document.addEventListener(
"click",
reiniciarTemporizador
);


reiniciarTemporizador();
