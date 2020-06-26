var regexCampoEmail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexTelefono = /^[0-9]{4}[-][0-9]{4}$/
const cantidad = 1000;

function contarCaracteres() {
    var caracteres = document.getElementById("consulta").value.length;
    var restantes = cantidad - caracteres;
    document.getElementById("caracteres").innerHTML = restantes;

}

function validar2() {
    var error = false;
    var mensajeError = " ";

    if (document.getElementById("nombre2").value == "") {
        error = true;
        mensajeError += "<p>El campo 'Nombre y Apellido/s' no puede estar vacio</p>";
    }
    if (!regexTelefono.test(document.getElementById("tele2").value)) {
        error = true;
        mensajeError += "<p>Ingrese un formato de telefono correcto: 1234-5678</p>";
    }
    if (document.getElementById("tele2").value == "") {
        error = false;
    }
    if (!regexCampoEmail.test(document.getElementById("email").value)) {
        error = true;
        mensajeError += "<p>Ingrese un formato de email correcto.<br> Ejemplo: ejemplo@ejemplo.com</p>"
    }


    if (error) {
        document.getElementById("mensaje2").innerHTML = mensajeError;
        return false;
    } else {
        alert("Gracias por su consulta, en breves se le contestara via Email!")
        return true;
    }
}