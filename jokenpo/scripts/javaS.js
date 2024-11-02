/**
 * 
 * @author Paulo Oliveira
 */
let pedra, papel, tesoura;
function jogar() {
    if (document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false) {
        alert('Escolha uma opção')
    } else {
       let pcJogada = Math.floor(Math.random() * 3 + 1);
       switch(pcJogada){
        case 1:
            document.getElementById("pc").src="img/pcpedra.png";
            break
        case 2:
            document.getElementById("pc").src = "img/pcpapel.png";
            break
        case 3: 
        document.getElementById("pc").src="img/pctesoura.png";
        
       }
    }
}
function resetar() {
    document.getElementById("pc").src = "img/pc.png";
    document.getElementById(placar).innerHTML = "";
}