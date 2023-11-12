let tiempoRestante1;
let tiempoRestante2;
let intervalo1;
let intervalo2;

function togglePlayPause() {
    const inputCronometro1 = document.getElementById("cronometro1");
    const inputCronometro2 = document.getElementById("cronometro2");

    tiempoRestante1 = parseInt(inputCronometro1.value, 10);
    tiempoRestante2 = parseInt(inputCronometro2.value, 10);

    if (!isNaN(tiempoRestante1) && tiempoRestante1 > 0) {
        intervalo1 = setInterval(actualizarCronometro1, 1000);
    }

    if (!isNaN(tiempoRestante2) && tiempoRestante2 > 0) {
        intervalo2 = setInterval(actualizarCronometro2, 1000);
    }
}

function actualizarCronometro1() {
    const display1 = document.getElementById("cronometro1Display");
    display1.textContent = `Tiempo restante en cronómetro 1: ${tiempoRestante1} segundos`;

    if (tiempoRestante1 <= 0) {
        clearInterval(intervalo1);
    } else {
        tiempoRestante1--;
    }
}

function actualizarCronometro2() {
    const display2 = document.getElementById("cronometro2Display");
    display2.textContent = `Tiempo restante en cronómetro 2: ${tiempoRestante2} segundos`;

    if (tiempoRestante2 <= 0) {
        clearInterval(intervalo2);
    } else {
        tiempoRestante2--;
    }
}
