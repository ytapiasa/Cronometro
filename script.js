
/*
let cronometros = [
    { running: false, segundos: 0, minutos: 0, microsegundos: 0, intervalId: null, mensajeId: "mensajeCronometro1" },
    { running: false, segundos: 0, minutos: 0, microsegundos: 0, intervalId: null, mensajeId: "mensajeCronometro2" }
];

function iniciar(cronometro) {
    if (cronometro) {
        cronometro.intervalId = setInterval(function () {
            cronometro.microsegundos += 100;
            if (cronometro.microsegundos === 1000) {
                cronometro.microsegundos = 0;
                cronometro.segundos++;
                if (cronometro.segundos === 60) {
                    cronometro.segundos = 0;
                    cronometro.minutos++;
                }
            }
            actualizarCronometro(cronometro);

            if (cronometro.segundos >= cronometro.tiempoLimite) {
                detenerCronometro(cronometro);
                mostrarMensaje("En Pausa", cronometro.mensajeId);
            }
        }, 100);
        cronometro.running = true;
    } else {
        alert("No se proporcionó un cronómetro válido.");
    }
}

function iniciarCronometro() {
    const tiempoInput = document.getElementById('tiempoInput').value;
    if (!tiempoInput || isNaN(tiempoInput) || tiempoInput <= 0) {
        alert("Por favor, ingrese un tiempo válido en segundos.");
        return;
    }

    const cronometroInactivo = cronometros.find(cronometro => !cronometro.running);

    if (cronometroInactivo) {
        cronometroInactivo.tiempoLimite = tiempoInput;
        iniciar(cronometroInactivo);
    } else {
        alert("Ambos cronómetros ya están en uso. Detén uno antes de comenzar otro.");
    }
}

function detenerCronometro(cronometro) {
    clearInterval(cronometro.intervalId);
    cronometro.running = false;
}

function actualizarCronometro(cronometro) {
    const cronometroIndex = cronometros.indexOf(cronometro) + 1;
    const tiempoFormateado = `${cronometro.minutos < 10 ? '0' : ''}${cronometro.minutos}:${cronometro.segundos < 10 ? '0' : ''}${cronometro.segundos}:${cronometro.microsegundos < 10 ? '00' : cronometro.microsegundos < 100 ? '0' : ''}${cronometro.microsegundos}`;
    document.querySelector(`#cronometro${cronometroIndex}`).innerHTML = tiempoFormateado;
}

function mostrarMensaje(mensaje, mensajeId) {
    const mensajes = document.querySelectorAll('.mensaje');
    mensajes.forEach(m => m.innerHTML = '');
    document.getElementById(mensajeId).innerHTML = mensaje;
}

function reset() {
    cronometros.forEach(cronometro => {
        detenerCronometro(cronometro);
        cronometro.segundos = 0;
        cronometro.minutos = 0;
        cronometro.microsegundos = 0;
        cronometro.tiempoLimite = 0;
        actualizarCronometro(cronometro);
        mostrarMensaje("Ejecutándose", cronometro.mensajeId);
    });
}

*/


let timers = [];
    let statuses = [];

    function startTimer(timerNumber) {
      const input = document.getElementById(`timer${timerNumber}`);
      const display = document.getElementById(`display${timerNumber}`);
      const status = document.getElementById(`status${timerNumber}`);

      if (timers[timerNumber - 1]) {
        clearInterval(timers[timerNumber - 1]);
      }

      let totalTime = input.value || 0;
      let startTime = new Date().getTime();

      status.textContent = 'En Ejecución...';

      timers[timerNumber - 1] = setInterval(function() {
        let currentTime = new Date().getTime();
        let elapsedTime = (currentTime - startTime) / 1000;

        if (elapsedTime <= totalTime) {
          display.textContent = elapsedTime.toFixed(3);
        } else {
          clearInterval(timers[timerNumber - 1]);
          startNextTimer(timerNumber);
        }
      }, 1);
    }

    function startNextTimer(timerNumber) {
      const status = document.getElementById(`status${timerNumber}`);
      status.textContent = ''; // Limpiar el mensaje de estado

      if (timerNumber < 5) {
        setTimeout(() => startTimer(timerNumber + 1), 0);
      }
    }

    function pauseTimer(timerNumber) {
      clearInterval(timers[timerNumber - 1]);
      const status = document.getElementById(`status${timerNumber}`);
      status.textContent = 'En Pausa...';
    }

    function resetTimer(timerNumber) {
      clearInterval(timers[timerNumber - 1]);
      const input = document.getElementById(`timer${timerNumber}`);
      const display = document.getElementById(`display${timerNumber}`);
      const status = document.getElementById(`status${timerNumber}`);
      input.value = '';
      display.textContent = '0.000';
      status.textContent = ''; // Limpiar el mensaje de estado
    }