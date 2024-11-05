/**
 * JS - Aula14: Jogo de cartas
 * @author Paulo Oliveira
 */
let nipes, faces, nipe,face;
nipes = ['♥', '♦', '♣', '♠'];
faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
nipe = Math.floor(Math.random() * 4 );
face = Math.floor(Math.random() * faces.length);
document.write("<h1>" + faces[face] + nipes[nipe] + "</h1>");

