const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    if (textArea.value.trim() === "") {
        mostrarMensajeDeError();
    } else {

    const textoEncriptado= encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    if (textArea.value.trim() === "") {
        mostrarMensajeDeError();
    } else {
    const textoEncriptado= desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function mostrarMensajeDeError() {
    mensaje.style.fontWeight = "bold";
    mensaje.style.fontSize = "24px";
    mensaje.style.textAlign = "center";
    mensaje.style.paddingTop = "280px"; 
    mensaje.style.height = "20%"; 
    mensaje.style.display = "flex";
    mensaje.style.flexDirection = "column"; 
    mensaje.style.justifyContent = "center"; 
    mensaje.style.alignItems = "center"; 
    mensaje.value = "Ningún mensaje fue encontrado";
}

function copiarTexto() {
    textArea.value = mensaje.value;
}