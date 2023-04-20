
var filas = parseInt(prompt("Ingrese el número de filas:"));
var columnaInicial = parseInt(prompt("Ingrese la columna inicial:"));

var piramide = "";

for (var fila = 0; fila < filas; fila++) {

  for (var columna = 0; columna < filas*2-1; columna++) {

    if (columna >= (filas - fila - 1) && columna < (filas + fila)) {
      piramide += "o";
    } else {
      piramide += "&nbsp;"+"&nbsp;"; 
    }
  }

  piramide += "<br>";
}

var numeroDiv = parseInt(prompt("Elige un número entre 1 y 5:"));

var divResultado = document.getElementById(numeroDiv.toString());

divResultado.innerHTML = piramide;