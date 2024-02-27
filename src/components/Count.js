document.addEventListener('DOMContentLoaded', function () {
    // Fecha exacta del evento (10 de marzo de 2024)
    const targetDate = new Date('2024-03-10T00:00:00');

    // Función para actualizar el contador cada segundo
    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        // Verificar si la fecha del evento ha pasado
        if (timeDifference <= 0) {
            document.getElementById('countdown').innerHTML = '¡El evento ha comenzado!';
        } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }

    // Actualizar el contador cada segundo
    setInterval(updateCountdown, 1000);

    // Llamar a la función una vez para mostrar el contador desde el principio
    updateCountdown();
});
