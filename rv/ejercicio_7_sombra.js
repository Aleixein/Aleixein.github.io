var luzMagenta = new THREE.PointLight(0xFF00FF);
var luzCyan = new THREE.PointLight(0x00FFFF);
var luzAmarilla = new THREE.PointLight(0xFFFF00);
luzMagenta.position.x = 35;
luzMagenta.position.y = 20;
luzMagenta.position.z = 35;
luzCyan.position.y = 25;
luzAmarilla.position.x = 90;
luzAmarilla.position.y = 22;
luzAmarilla.position.z = 90;

var escena = new THREE.Scene();
escena.add(marcoMalla);
escena.add(cuadros);
escena.add(torres);
escena.add(luzMagenta);
escena.add(luzCyan);
escena.add(luzAmarilla);

var campoVision = 55; //en grados
var relacionAspecto = window.innerWidth/window.innerHeight;
var planoCercano = 1;
var planoLejano = 600;

var camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano );

camara.position.x = 100;
camara.position.y = 85;
camara.position.z = 100;

camara.lookAt(escena.position);

var renderizador = new THREE.WebGLRenderer( {antialias: true } );
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);
renderizador.shadowMapEnabled = true;
torres.castShadow = true;
cuadros.receiveShadow = true;
marcoMalla.receiveShadow = true;
luzMagenta.castShadow = true;
luzCyan.castShadow = true;
luzAmarilla.castShadow = true;

renderizador.render( escena,camara );
