const imagen = document.getElementById("imagenActualizada");

function actualizarImagen() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "ruta_de_la_imagen", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            imagen.src = xhr.responseText;
        }
    };
    xhr.send();
}

setInterval(actualizarImagen, 1000); // Actualizar cada segundo
