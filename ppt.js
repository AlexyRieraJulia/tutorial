function aleatorio(minimo, maximo)
{
  var numero = Math.round( Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}

// Math es un objeto son colecciones de funciones y variables y es el paquete de opciones matematicas que tiene javascript 
// Math.floor redondea los número decimales a enteros
// Math.random genera un numero random entre 0 y el 1 (del 0% al 100%) menos 0 y 1

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];


var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0)


alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligio " + opciones[opcionMaquina]);


if(opcionUsuario == piedra)
    {

      if(opcionMaquina == piedra)
        {
          alert("Empate!");
        }
      else if(opcionMaquina == papel)
          {
            alert("Perdiste");
          }
      else if(opcionMaquina == tijera)
        {
          alert("Ganaste!");
        }
      else if(opcionMaquina == lagarto)
        {
          alert("Ganaste!");
        }
      else if(opcionMaquina == spock)
        {
          alert("Ganaste!");
        }
    }
else if(opcionUsuario == papel)
    {

      if(opcionMaquina == piedra)
        {
          alert("Ganaste!");
        }
      else if(opcionMaquina == papel)
          {
            alert("Empate!");
          }
      else if(opcionMaquina == tijera)
        {
          alert("Perdiste!");
        }
      else if(opcionMaquina == lagarto)
        {
          alert("Perdiste!");
        }
      else if(opcionMaquina == spock)
        {
          alert("Ganaste!");
        }
    }
else if(opcionUsuario == tijera)
    {

      if(opcionMaquina == piedra)
        {
          alert("Perdiste!");
        }
      else if(opcionMaquina == papel)
          {
            alert("Ganaste");
          }
      else if(opcionMaquina == tijera)
        {
          alert("Empate!");
        }
      else if(opcionMaquina == lagarto)
        {
          alert("Ganaste!");
        }
      else if(opcionMaquina == spock)
        {
          alert("Perdiste!");
        }
    }
else if(opcionUsuario == lagarto)
  	{
      if(opcionMaquina == piedra)
        {
          alert("Perdiste!");
        }
      else if(opcionMaquina == papel)
        {
          alert("Ganaste!");
        }
      else if(opcionMaquina == tijera)
        {
          alert("Perdiste");
        }
      else if(opcionMaquina == lagarto)
        {
          alert("Empate");
        }
      else if(opcionMaquina == spock)
        {
          alert("Ganaste!");
        }
    }
else if(opcionUsuario == spock)
  	{
      if(opcionMaquina == piedra)
        {
          alert("Ganaste!");
        }
      else if(opcionMaquina == papel)
      {
        alert("Perdiste!");
      }
      else if(opcionMaquina == tijera)
        {
          alert("Ganaste!");
        }
      else if(opcionMaquina == lagarto)
        {
          alert("Perdiste!");
        }
      else if(opcionMaquina == spock)
        {
          alert("Empate!");
        }
    }
else if(opcionUsuario > 2)
  {
    alert("Vuelve a elegir");
  }
