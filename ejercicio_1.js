var miCanvas = document.getElementById("miCanvas");
var contexto1 = miCanvas.getContext1("2d");
var contexto2 = miCanvas.getContext2("2d");
var contexto3 = miCanvas.getContext3("2d");

contexto1.fillStyle = "red";
contexto1.fillRect(30,30,50,50);

contexto2.fillStyle = "green";
contexto2.fillRect(130,30,50,25);

contexto3.fillStyle = "blue";
contexto3.fillRect(30,130,25,50);
