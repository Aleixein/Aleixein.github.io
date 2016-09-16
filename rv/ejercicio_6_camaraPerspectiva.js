//var campoVision = 60; //en grados
//var relacionAspecto = window.innerWidth/window.innerHeight;
//var planoCercano = 1;
//var planoLejano = 600;
var camara = new THREE.PerspectiveCamera();
//var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano );

camara.position.x = 35;
camara.position.z = 150;
camara.position.y = 20;

var escena = new THREE.Scene();
escena.add(cuadros);
escena.add(torres);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
