let textInput = document.querySelector("#input-texto");
let outInput = document.querySelector("#output");

function cripto(){
    let texto = textInput.value;
    
    let resultCripto = texto.replace(/e/g, "enter").replace(/i/g,"imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("output").innerHTML = '<textarea readonly id="output-texto">' + resultCripto + '</textarea>' 
    + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';

    document.getElementById("textocopi").setAttribute("disabled", true);
    
    limpatexto();
}

function descripto(){
    let texto = textInput.value;

    let resultdescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u");

    document.getElementById("output").innerHTML = '<textarea readonly id="input-texto">' + resultdescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';

    document.getElementById("textocopi").setAttribute("disabled", true);

}

function copiar(){
    let textcop = document.getElementById("output");

    textcop.select();
    document.execCommand("copy");
    alert("Texto Copiado");
}

function limpatexto(){
    textInput.value = document.getElementById("#input-texto");
    textoInput.value = "";

}
