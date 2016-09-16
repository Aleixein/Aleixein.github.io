var campoVision = 55; //en grados
var relacionAspecto = window.innerWidth/window.innerHeight;
var planoCercano = 1;
var planoLejano = 600;

var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano );

camara.position.x = 35;
camara.position.z = 160;
camara.position.y = 30;

var escena = new THREE.Scene();
escena.add(cuadros);
escena.add(torres);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
