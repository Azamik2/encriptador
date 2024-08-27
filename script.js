
const areaTexto = document.querySelector(".area__texto");
const areaTextoResultado = document.querySelector(".area_texto_resultado");

function botonEncriptar(){
    const textoEncriptado = encriptar(areaTexto.value);
    areaTextoResultado.value = textoEncriptado;
    areaTexto.value = "";
    areaTextoResultado.style.backgroundImage = "none";
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(areaTextoResultado.value);
    areaTextoResultado.value = textoDesencriptado;
    areaTexto.value = "";
    areaTextoResultado.style.backgroundImage = "none";
}

function botonCopiar(){
    var texto = areaTextoResultado.value;
    navigator.clipboard.writeText(texto).then(function () {
        //Muestra un mensaje de éxito al usuario en la página
        alert ('Texto copiado con exito');
     }).catch(function (err) {
         //Muestra un mensaje de error al usuario en la página
        alert ('Error al copiar texto: ' + err);
      });
    }

function encriptar(stringEncriptada){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringEncriptada.includes(codigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(codigo [i][0], codigo [i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringDesencriptada.includes(codigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(codigo [i][1], codigo [i][0]);
        }
    }
    return stringDesencriptada;
}
