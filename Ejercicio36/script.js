    function verificarNumero() {
      const entradaNumero = document.getElementById('entradaNumero'); /* Se obtiene el valor del campo de entrada y se almacena en la constante entradaNumero con const entradaNumero = document.getElementById('entradaNumero'); */
      const resultado = document.getElementById('resultado'); /* Se obtiene el elemento donde se mostrará el resultado y se almacena en la constante resultado con const resultado = document.getElementById('resultado'); */
      const numero = parseInt(entradaNumero.value, 10); /* Se convierte el valor del campo de entrada a un número entero y se almacena en la constante numero con const numero = parseInt(entradaNumero.value, 10); */
	    /* Dentro de la función verificarNumero(), se utilizan condicionales para determinar si el número es positivo, negativo o cero: */
      if (numero > 0) { /* Si numero > 0, se muestra el mensaje "El número introducido es positivo" en el elemento resultado. */
        resultado.innerHTML = 'El número introducido es positivo';
      } else if (numero < 0) { /* Si numero < 0, se muestra el mensaje "El número introducido es negativo" en el elemento resultado. */
        resultado.innerHTML = 'El número introducido es negativo';
      } else { /* Si no se cumple ninguna de las condiciones anteriores, se muestra el mensaje "El número introducido es cero" en el elemento resultado. */
        resultado.innerHTML = 'El número introducido es cero';
      }
	  /* Cuando el usuario introduce un número en el campo de entrada y hace clic en el botón "Verificar", la función verificarNumero() se ejecuta y muestra el resultado en la página web. */
    }