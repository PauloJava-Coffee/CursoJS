/**
 * @author Paulo 
 * 
 *  */

let etanol, gasolina , txt;
function calcular() {
    etanol = parseFloat(frmFlex.txtEtanol.value)
    gasolina = parseFloat(frmFlex.txtGasolina.value)
    txt = gasolina + "";
    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src="img/etanol.png";
        alert(txt )
    } else {
        document.getElementById("status").src="img/gasolina.png";
    }

}
function resetar(){
    document.getElementById("status").src="img/neutro.png";
}