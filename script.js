const btnSubir = document.getElementById('btnSubir');
const fileInput = document.getElementById('fileInput');
const infoCard = document.getElementById('infoCard');
const nombreArchivo = document.getElementById('nombreArchivo');
const tamanoArchivo = document.getElementById('tamanoArchivo');
const previewContainer = document.getElementById('previewContainer');

// Al hacer clic en el botón personalizado, activamos el input file
btnSubir.addEventListener('click', () => {
    fileInput.click();
});

// Cuando el usuario selecciona un archivo de imagen
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        // Mostramos el contenedor de información
        infoCard.style.display = 'block';

        // Mostramos el nombre y tamaño en bytes
        nombreArchivo.textContent = `Nombre: ${file.name}`;
        tamanoArchivo.textContent = `Tamaño: ${file.size} bytes`;

        // Generamos la previsualización de la imagen
        const reader = new FileReader();
        reader.onload = function(e) {
            previewContainer.innerHTML = `<img src="${e.target.result}" alt="Vista previa de imagen">`;
        }
        reader.readAsDataURL(file);
    }
});