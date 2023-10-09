const imagenes = ["escenas/1_gif.gif", "escenas/2_gif.gif", "escenas/51_gif.gif", "escenas/52_gif.gif",
 "escenas/53_gif.gif", "escenas/54_gif.gif", "escenas/55_gif.gif", "escenas/56_gif.gif", "escenas/57_gif.gif",
 "escenas/59_gif.gif", "escenas/60_gif.gif", "escenas/61_gif.gif", "escenas/62_gif.gif",
   "escenas/63_gif.gif", "escenas/64_gif.gif", "escenas/65_gif.gif", "escenas/66_gif.gif", "escenas/67_gif.gif",
    "escenas/68_gif.gif", "escenas/69_gif.gif", "escenas/70_gif.gif"];

let indiceActual = 0;

const imagenHistorieta = document.getElementById("imagen-historieta");
const botonBack = document.getElementById("boton-back");
const botonNext = document.getElementById("boton-next");


function mostrarImagen(indice) {
    imagenHistorieta.src = imagenes[indice];

    // Mostrar los botones solo en las imágenes 57, 61 y 65
    if (indice === 56 || indice === 60 || indice === 64) {
        document.getElementById("decision-buttons").style.display = "block";
    } else {
        document.getElementById("decision-buttons").style.display = "none";
    }

    actualizarBotones();
}



function avanzar() {
    if (indiceActual < imagenes.length - 1) {
        indiceActual++;
        mostrarImagen(indiceActual);
    }
    actualizarBotones();
}

function retroceder() {
    if (indiceActual > 0) {
        indiceActual--;
        mostrarImagen(indiceActual);
    }
    actualizarBotones();
}

function actualizarBotones() {
    if (indiceActual === 0) {
        botonBack.disabled = true;
    } else {
        botonBack.disabled = false;
    }

    if (indiceActual === imagenes.length - 1) {
        botonNext.disabled = true;
    } else {
        botonNext.disabled = false;
    }
}

function tomarDecision(decision) {
    if (decision === 'INTERVENE') {
        // Lógica para manejar la decisión "INTERVENE"
        if (indiceActual === 56) {
            // Si estamos en la imagen 57 y se presiona "INTERVENE", avanzamos a la imagen 69
            avanzar(); // Utilizar la función avanzar para avanzar a la siguiente imagen
        } else if (indiceActual === 60) {
            // Si estamos en la imagen 61 y se presiona "INTERVENE", avanzamos a la imagen 69
            avanzar(); // Utilizar la función avanzar para avanzar a la siguiente imagen
        } else if (indiceActual === 64) {
            // Si estamos en la imagen 65 y se presiona "INTERVENE", avanzamos a la imagen 68
            avanzar(); // Utilizar la función avanzar para avanzar a la siguiente imagen
        }
    } else if (decision === "DON'T INTERVENE") {
        // Lógica para manejar la decisión "DON'T INTERVENE", si es necesario
        avanzar(); // Avanzar a la siguiente imagen sin hacer ninguna modificación específica
    }
}

