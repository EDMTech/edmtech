// Tenta tocar automaticamente ao carregar a página
window.addEventListener("load", function() {
    var audio = document.getElementById("audio");
    audio.volume = 0.4;  // Define o volume
    audio.play().catch(error => {
        console.log("Autoplay bloqueado pelo navegador. O áudio será iniciado apenas com interação do usuário.");
    });
});

// Adiciona evento ao botão para tocar ou pausar o áudio
document.getElementById("play-audio").addEventListener("click", function() {
    var audio = document.getElementById("audio");

    // Verifica se o áudio está pausado
    if (audio.paused) {
        // Define o volume e inicia a reprodução
        audio.volume = 0.4; 
        audio.play().then(() => {
            console.log("Áudio reproduzido com sucesso após a interação do usuário.");
            // Altera o texto do botão para "Pausar Música"
            document.getElementById("play-audio").textContent = "Pausar Música";
        }).catch(function(error) {
            console.error("Erro ao tentar reproduzir o áudio:", error);
        });
    } else {
        // Pausa o áudio se já estiver tocando
        audio.pause();
        console.log("Áudio pausado.");
        // Altera o texto do botão para "Tocar Música"
        document.getElementById("play-audio").textContent = "Tocar Música";
    }
});
