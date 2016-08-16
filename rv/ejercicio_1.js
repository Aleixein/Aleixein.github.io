var miCanvas1 = document.getElementById("miCanvas1");
var contexto1 = miCanvas1.getContext("2d");
var miCanvas2 = document.getElementById("miCanvas2");
var contexto2 = miCanvas2.getContext("2d");
var miCanvas3 = document.getElementById("miCanvas3");
var contexto3 = miCanvas3.getContext("2d");

contexto1.fillStyle = "red";
contexto1.fillRect(30,30,50,50);

contexto2.fillStyle = "green";
contexto2.fillRect(130,30,50,25);

contexto3.fillStyle = "blue";
contexto3.fillRect(30,130,25,50);
