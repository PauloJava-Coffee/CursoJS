/*

@author Paulo Oliveira
*/

function sorteio() {
    let face = Math.floor(Math.random() * 6 + 1)
    switch (face) {
        case 1:
            document.getElementById("dado").src = "img/face1.png";
            break;
        case 2:
            document.getElementById("dado").src = "img/face2.png";
            break;
        case 3:
            document.getElementById("dado").src = "img/face3.png";
            break;
        case 4:
            document.getElementById("dado").src = "img/face4.png";
            break;
        case 5:
            document.getElementById("dado").src = "img/face5.png";
            break;
        case 6:
            document.getElementById("dado").src = "img/face6.png";
            break;
        default:
            break;
    }
}