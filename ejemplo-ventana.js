VENTANA.escena = new THREE.Scene();
VENTANA.camara = new THREE.PerspectiveCamera(75,window.innerwidth/window.innerHeight,0.1,1000);

VENTANA.camara.position.z = 5;

var lienzo = document.getElementById("ejemeplo-ventana");
VENTANA.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antializas: true});
