import { useState, useEffect } from 'react';

function Countdown() {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-04-06T21:00:00');

    function updateCountdown() {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        setCountdown('¡El evento ha comenzado!');
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }

    const intervalId = setInterval(updateCountdown, 1000);

    updateCountdown(); // Llamar a la función una vez para mostrar el contador desde el principio

    return () => clearInterval(intervalId); // Limpiar intervalo cuando el componente se desmonte
  }, []);

  return (
    <div>
     
      <div id="countdown">{countdown}</div>
    </div>
  );
}

export default Countdown;
