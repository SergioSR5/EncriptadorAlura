function encriptar(){
    var texto=document.getElementById("inputTexto").value;

    var textCifrado=texto.replace(/e/igm,"enter");
    var textCifrado=textCifrado.replace(/o/igm,"ober");
    var textCifrado=textCifrado.replace(/i/igm,"imes");
    var textCifrado=textCifrado.replace(/a/igm,"ai");
    var textCifrado=textCifrado.replace(/u/igm,"ufat");

    document.getElementById("mun").style.display="none";
    document.getElementById("text").style.display="none";
    document.getElementById("text-area").innerHTML=textCifrado;
    document.getElementById("copy").style.display="show";
    document.getElementById("copy").style.display="inherit";

}
function desencriptar(){
    var texto=document.getElementById("inputTexto").value;

    var textCifrado=texto.replace(/enter/igm,"e");
    var textCifrado=textCifrado.replace(/ober/igm,"o");
    var textCifrado=textCifrado.replace(/imes/igm,"i");
    var textCifrado=textCifrado.replace(/ai/igm,"a");
    var textCifrado=textCifrado.replace(/ufat/igm,"u");

    document.getElementById("mun").style.display="none";
    document.getElementById("text").style.display="none";
    document.getElementById("text-area").innerHTML=textCifrado;
    document.getElementById("copy").style.display="show";
    document.getElementById("copy").style.display="inherit";
}

function copy(){
    var texto=document.getElementById("text-area");
    texto.select();
    texto.setSelectionRange(0,99990);
    document.execCommand("copy");
    alert("Copiado");

}