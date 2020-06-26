function validar() {
    var error = false;
    var mensajeError = " ";
    var enfermedad = 0;

    if (document.getElementById("nombre").value == '') {
        error = true;
        mensajeError += "<p>El campo 'Nombre y Apellido/s' no puede estar vacio</p>";
    }
    if (document.getElementById("dni").value == '') {
        error = true;
        mensajeError += "<p>El campo 'DNI' no puede estar vacio</p>";
    }
    if (document.getElementById("telefono").value == '') {
        error = true;
        mensajeError += "<p>El campo 'Telefono' no puede estar vacio</p>";
    }

    var opcionesSintomas = document.getElementsByName("fiebre");
    var seleccionado = false;
    for (i in opcionesSintomas) {
        if (opcionesSintomas[i].checked) {
            seleccionado = true;
            if (opcionesSintomas[i].value == "si") {
                enfermedad++;
            }
        }
    }
    if (!seleccionado) {
        error = true;
        mensajeError += "<p>Por favor aclare si tuvo fiebre mayor a 38 grados</p>"
    }

    var opcionesSintomas = document.getElementsByName("dolor");
    var seleccionado = false;
    for (i in opcionesSintomas) {
        if (opcionesSintomas[i].checked) {
            seleccionado = true;
            if (opcionesSintomas[i].value == "si") {
                enfermedad++;
            }
        }
    }
    if (!seleccionado) {
        error = true;
        mensajeError += "<p>Por favor aclare si tuvo dolor de cabeza</p>"
    }

    var opcionesSintomas = document.getElementsByName("tos");
    var seleccionado = false;
    for (i in opcionesSintomas) {
        if (opcionesSintomas[i].checked) {
            seleccionado = true;
            if (opcionesSintomas[i].value == "si") {
                enfermedad++;
            }
        }
    }
    if (!seleccionado) {
        error = true;
        mensajeError += "<p>Por favor aclare si tuvo una tos persistente</p>"
    }

    var opcionesSintomas = document.getElementsByName("garganta");
    var seleccionado = false;
    for (i in opcionesSintomas) {
        if (opcionesSintomas[i].checked) {
            seleccionado = true;
            if (opcionesSintomas[i].value == "si") {
                enfermedad++;
            }
        }
    }
    if (!seleccionado) {
        error = true;
        mensajeError += "<p>Por favor aclare si tuvo dolor de garganta</p>"
    }

    var opcionesSintomas = document.getElementsByName("respirar");
    var seleccionado = false;
    for (i in opcionesSintomas) {
        if (opcionesSintomas[i].checked) {
            seleccionado = true;

            if (opcionesSintomas[i].value == "si") {
                enfermedad++;
            }
        }
    }
    if (!seleccionado) {
        error = true;
        mensajeError += "<p>Por favor aclare si tuvo dificultad para respirar</p>"
    }

    if (error) {
        document.getElementById("mensaje").innerHTML = mensajeError;
        return false;
    } else {
        alert("El formulario fue completado correctamente. " + enfermedad + " síntomas de COVID-19 fueron registrados")
        return false;
    }
}

function cambiar() {

    var opciones = document.getElementsByName("viajado");
    for (i in opciones) {
        if (opciones[i].value == "si" && opciones[i].checked) {
            document.getElementById("paises").style.display = "inline-block";
        }
        if (opciones[i].value == "no" && opciones[i].checked) {
            document.getElementById("paises").style.display = "none";
        }
    }
}

function mostrarDireccion() {
    var opcionesDir = document.getElementsByName("respirar");
    for (i in opcionesDir) {
        if (opcionesDir[i].value == "si" && opcionesDir[i].checked) {
            document.getElementById("ocultado").style.display = "flex";
        }
        if (opcionesDir[i].value == "no" && opcionesDir[i].checked) {
            document.getElementById("ocultado").style.display = "none";
        }
    }
}