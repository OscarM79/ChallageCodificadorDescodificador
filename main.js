//Asignacion html en variables
var texto = document.querySelector(".texto");
var encriptar = document.querySelector(".encriptar");
var desencriptar = document.querySelector(".desencriptar");
var muñeco = document.querySelector(".muñeco");
var cuadroEspera = document.querySelector(".cuadro-espera");
var msjEncriptado = document.querySelector(".msj_encriptado");
var btnCopiar = document.querySelector(".btn-copiar");

//Asignacion de funciones al evento clic de los botones
encriptar.addEventListener("click", Encriptacion);
desencriptar.addEventListener("click", Desencriptacion);
btnCopiar.addEventListener("click", copiar);

//Funciones
//Encriptacion de texto ingresado
function Encriptacion() {
    let textoFinal = verificadorTexto();
    if (textoFinal === texto.value) {
        textoFinal = textoFinal.replace(/e/g, 'enter');
        textoFinal = textoFinal.replace(/i/g, 'imes');
        textoFinal = textoFinal.replace(/a/g, 'ai');
        textoFinal = textoFinal.replace(/o/g, 'ober');
        textoFinal = textoFinal.replace(/u/g, 'ufat');

        textoCorrecto(textoFinal);
    } else {
        if (textoFinal != null) {
            mensajeError();
        }
    }
}
//Desencriptacion de texto ingresado
function Desencriptacion() {
    let textoFinal = verificadorTexto();
    if (textoFinal === texto.value) {
        textoFinal = textoFinal.replace(/(enter)/g, 'e');
        textoFinal = textoFinal.replace(/(imes)/g, 'i');
        textoFinal = textoFinal.replace(/(ai)/g, 'a');
        textoFinal = textoFinal.replace(/(ober)/g, 'o');
        textoFinal = textoFinal.replace(/(ufat)/g, 'u');

        textoCorrecto(textoFinal);
    } else {
        if (textoFinal != null) {
            mensajeError();
        }
    }
}
//Funcion de copiar texto
function copiar() {
    navigator.clipboard.writeText(msjEncriptado.innerHTML);
    const tooltip = document.querySelector(".tooltip");

    tooltip.classList.add('active');
    setTimeout(() => {
       tooltip.classList.remove('active');
    }, 1500);
    
}
//Comprobacion texto solo minusculas, sin acentos y sin caracteres especiales
function verificadorTexto() {
    let textocomprobado = "";
    //Expresiones regulares
    let regex = /[a-zñ]+\s*/g;
    let textoVerificar = texto.value.match(regex);
    if (texto.value != "") {
        if (textoVerificar != null) {
            for (let i = 0; i < textoVerificar.length; i++) {
                textocomprobado = textocomprobado + textoVerificar[i];
            }
        } else {
            textocomprobado = false;
        }
        
    } else {
        textocomprobado = null;
    }
    return textocomprobado;

}
//Funcion de mostrar la leyenda "Solo letras minúsculas y sin acentos"
function mensajeError() {
    var leyenda = document.querySelector(".leyenda");

    leyenda.classList.add('active');
    setTimeout(() => {
        leyenda.classList.remove('active');
     }, 1500);
    
}
//Funcion de asignar el texto ya modificado
function textoCorrecto(textofinal) {
    muñeco.style.display = "none";
    cuadroEspera.style.display = "none";
    msjEncriptado.style.display = "flex";
    msjEncriptado.innerHTML = textofinal;
    btnCopiar.style.display = "flex";

}