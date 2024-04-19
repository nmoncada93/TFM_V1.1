const fs = require('fs');

// Ruta al archivo .tmp
const filePath = 'ruta/al/archivo/tmp';

// Leer el contenido del archivo
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    // Dividir el contenido en líneas
    const lines = data.trim().split('\n');

    // Procesar cada línea
    for (const line of lines) {
        const values = line.split(/\s+/);
        console.log(values);
    }
});



