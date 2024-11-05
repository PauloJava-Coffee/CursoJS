/**
 * 
 * @author Paulo Oliveira
 */

let pedra, papel, tesoura;
function jogar() {
    pedra = document.getElementById("pedra").checked;
    papel = document.getElementById("papel").checked;
    tesoura = document.getElementById("tesoura").checked;
    if (pedra == false && papel == false && tesoura == false) {
        alert('Escolha uma opção')
    } else {
        let pcJogada = Math.floor(Math.random() * 3);
        switch (pcJogada) {
            case 0:
                document.getElementById("pc").src = "img/pcpedra.png";
                break
            case 1:
                document.getElementById("pc").src = "img/pcpapel.png";
                break
            case 2:
                document.getElementById("pc").src = "img/pctesoura.png";
                break;
        }
        if ((pedra == true && pcJogada == 0) || (papel == true && pcJogada == 1) || tesoura == true && pcJogada == 2) {

            document.getElementById("placar").innerHTML = "Empate"
        } else if ((pedra == true && pcJogada == 1) || (papel == true && pcJogada == 2) || tesoura == true && pcJogada == 0) {

            document.getElementById("placar").innerHTML = "Perdeu"
        } else {

            document.getElementById("placar").innerHTML = "Ganhou"
        }
        
    }
}
function resetar() {
    document.getElementById("pc").src = "img/pc.png";
    document.getElementById("placar").innerHTML = "";
}




