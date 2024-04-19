document.addEventListener("DOMContentLoaded", function() {
    const btnImagen1 = document.getElementById("btnImagen1");
    const btnImagen2 = document.getElementById("btnImagen2");
    const imagenContainer = document.getElementById("imagenContainer");
    let currentImage = null; // Rastrear la imagen actualmente mostrada
    let lastImageChange = Date.now(); // Tiempo del último cambio de imagen
    
    btnImagen1.addEventListener("click", function() {
        mostrarOcultarImagen("images/imagen1.png", btnImagen1);
    });
    
    btnImagen2.addEventListener("click", function() {
        mostrarOcultarImagen("images/imagen2.png", btnImagen2);
    });
    
    function mostrarOcultarImagen(src, button) {
        const currentTime = Date.now();
        
        if (button.getAttribute("data-visible") === "false" || currentTime - lastImageChange >= 2 * 60 * 1000) {
            // Mostrar imagen
            const imgElement = document.createElement("img");
            imgElement.src = addCacheBuster(src); // Agregar parámetro anti caché
            imgElement.alt = "Imagen mostrada";
            
            imagenContainer.innerHTML = "";
            imagenContainer.appendChild(imgElement);
            
            button.setAttribute("data-visible", "true");
            currentImage = imgElement;
            lastImageChange = currentTime;
        } else {
            // Ocultar imagen
            imagenContainer.innerHTML = "";
            button.setAttribute("data-visible", "false");
        }
    }
    
    function addCacheBuster(src) {
        const cacheBuster = Date.now();
        return src + "?t=" + cacheBuster;
    }
    
    // Actualizar la imagen cada 2 minutos
    setInterval(function() {
        if (currentImage) {
            const currentTime = Date.now();
            if (currentTime - lastImageChange >= 2 * 60 * 1000) {
                currentImage.src = addCacheBuster(currentImage.src);
                lastImageChange = currentTime;
            }
        }
    }, 2 * 60 * 1000); // 2 minutos en milisegundos
});




/*
document.addEventListener("DOMContentLoaded", function() {
    const btnImagen1 = document.getElementById("btnImagen1");
    const btnImagen2 = document.getElementById("btnImagen2");
    const imagenContainer = document.getElementById("imagenContainer");
    let currentImage = null; // Rastrear la imagen actualmente mostrada
    let lastImageChange = 0; // Rastrear el tiempo del último cambio de imagen
    
    btnImagen1.addEventListener("click", function() {
        mostrarOcultarImagen("images/imagen1.png", btnImagen1);
    });
    
    btnImagen2.addEventListener("click", function() {
        mostrarOcultarImagen("images/imagen2.png", btnImagen2);
    });
    
    function mostrarOcultarImagen(src, button) {
        const currentTime = Date.now();
        
        if (currentImage && currentTime - lastImageChange >= 0.5 * 60 * 1000) {
            // Han pasado más de 2 minutos desde la última imagen, se cierra la anterior
            imagenContainer.innerHTML = "";
            currentImage = null;
        }
        
        if (button.getAttribute("data-visible") === "false") {
            // Mostrar imagen
            const imgElement = document.createElement("img");
            imgElement.src = addCacheBuster(src); // Agregar parámetro anti caché
            imgElement.alt = "Imagen mostrada";
            
            imagenContainer.innerHTML = "";
            imagenContainer.appendChild(imgElement);
            
            button.setAttribute("data-visible", "true");
            currentImage = imgElement;
            lastImageChange = currentTime;
        } else {
            // Ocultar imagen
            imagenContainer.innerHTML = "";
            button.setAttribute("data-visible", "false");
        }
    }
    
    function addCacheBuster(src) {
        const cacheBuster = Date.now();
        return src + "?t=" + cacheBuster;
    }
    
    // Actualizar la imagen cada 2 minutos
    setInterval(function() {
        if (currentImage) {
            const currentTime = Date.now();
            if (currentTime - lastImageChange >= 2 * 60 * 1000) {
                currentImage.src = addCacheBuster(currentImage.src);
                lastImageChange = currentTime;
            }
        }
    }, 2 * 60 * 1000); // 2 minutos en milisegundos
});
*/






/*
document.addEventListener("DOMContentLoaded", function() {
    const btnImagen1 = document.getElementById("btnImagen1");
    const btnImagen2 = document.getElementById("btnImagen2");
    const imagenContainer = document.getElementById("imagenContainer");
    let currentImage = null; // Rastrear la imagen actualmente mostrada
    
    btnImagen1.addEventListener("click", function() {
        mostrarOcultarImagen("images/imagen1.png", btnImagen1);
    });
    
    btnImagen2.addEventListener("click", function() {
        mostrarOcultarImagen("images/imagen2.png", btnImagen2);
    });
    
    function mostrarOcultarImagen(src, button) {
        if (currentImage) {
            // Cerrar imagen anterior si está abierta
            imagenContainer.innerHTML = "";
            currentImage = null;
        }
        
        if (button.getAttribute("data-visible") === "false") {
            // Mostrar imagen
            const imgElement = document.createElement("img");
            imgElement.src = src + "?t=" + Date.now(); // Agregar parámetro anti caché
            imgElement.alt = "Imagen mostrada";
            
            imagenContainer.innerHTML = "";
            imagenContainer.appendChild(imgElement);
            
            button.setAttribute("data-visible", "true");
            currentImage = imgElement;
        } else {
            // Ocultar imagen
            imagenContainer.innerHTML = "";
            button.setAttribute("data-visible", "false");
        }
    }

    function addCacheBuster(src) {
        const cacheBuster = Date.now();
        return src + "?t=" + cacheBuster;
    }
    
    // Actualizar la imagen cada 2 minutos
    setInterval(function() {
        imageIndex++;
        const imageUrl = `images/imagen${imageIndex}.jpg`;
        const currentButton = imageIndex % 2 === 0 ? btnImagen2 : btnImagen1;
        mostrarOcultarImagen(imageUrl, currentButton);
    }, 1 * 60 * 1000); // 2 minutos en milisegundos
});
*/





/* FUNCIONAL


document.addEventListener("DOMContentLoaded", function() {
    const btnImagen1 = document.getElementById("btnImagen1");
    const btnImagen2 = document.getElementById("btnImagen2");
    const imagenContainer = document.getElementById("imagenContainer");
    
    btnImagen1.addEventListener("click", function() {
        mostrarOcultarImagen("images/imagen1.png", btnImagen1);
    });
    
    btnImagen2.addEventListener("click", function() {
        mostrarOcultarImagen("images/imagen2.png", btnImagen2);
    });
    
    function mostrarOcultarImagen(src, button) {
        const imgElement = document.createElement("img");
        imgElement.src = src;
        imgElement.alt = "Imagen mostrada";
        
        if (button.getAttribute("data-visible") === "false") {
            // Mostrar imagen
            imagenContainer.innerHTML = "";
            imagenContainer.appendChild(imgElement);
            button.setAttribute("data-visible", "true");
        } else {
            // Ocultar imagen
            imagenContainer.innerHTML = "";
            button.setAttribute("data-visible", "false");
        }
    }



        // Actualizar la imagen cada 2 minutos
        setInterval(function() {
            imageIndex++;
            const imageUrl = `images/imagen${imageIndex}.jpg`;
            const currentButton = imageIndex % 2 === 0 ? btnImagen2 : btnImagen1;
            mostrarOcultarImagen(imageUrl, currentButton);
        }, 2 * 60 * 1000); // 2 minutos en milisegundos
});



*/















//CODIGO FUNCIONAL PERO NO OCULTA LA IMAGEN AL PULSAR NUEVAMENTE SOBRE ELLA:
/*
document.addEventListener("DOMContentLoaded", function() {
    const btnImagen1 = document.getElementById("btnImagen1");
    const btnImagen2 = document.getElementById("btnImagen2");
    const imagenContainer = document.getElementById("imagenContainer");
    
    btnImagen1.addEventListener("click", function() {
        mostrarImagen("images/imagen1.png");
    });
    
    btnImagen2.addEventListener("click", function() {
        mostrarImagen("images/imagen2.png");
    });
    
    function mostrarImagen(src) {
        const imgElement = document.createElement("img");
        imgElement.src = src;
        imgElement.alt = "Imagen mostrada";
        
        // Limpiar el contenido anterior y luego añadir la imagen
        imagenContainer.innerHTML = "";
        imagenContainer.appendChild(imgElement);
    }
});

*/

/*

document.addEventListener("DOMContentLoaded", function() {
    const btnImagen1 = document.getElementById("btnImagen1");
    const btnImagen2 = document.getElementById("btnImagen2");
    const imagenContainer = document.getElementById("imagenContainer");
    
    btnImagen1.addEventListener("click", function() {
        mostrarImagen("images/imagen1.png");
    });
    
    btnImagen2.addEventListener("click", function() {
        mostrarImagen("images/imagen2.png");
    });
    
    function mostrarImagen(src) {
        imagenContainer.innerHTML = `<img src="${src}" alt="Imagen mostrada del reloj">`;
    }
});

*/