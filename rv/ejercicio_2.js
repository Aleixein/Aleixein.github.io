var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 12;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );

var forma_tronco = new THREE.CylinderGeometry(1,1,4,20);
var material_tronco = new THREE.MeshBasicMaterial( { color:0x683603, wireframeLinewidth:2 } );
var tronco = new THREE.Mesh( forma_tronco, material_tronco ); 

var forma_hojas = new THREE.SphereGeometry(2.25,32,32);
var material_hojas = new THREE.MeshBasicMaterial( { color:0x0A8131 } );
var hojas = new THREE.Mesh( forma_hojas, material_hojas);

hojas.position.y=3.85;

tronco.rotateX(Math.PI/8);
escena.add(tronco);
escena.add(hojas);
renderizador.render(escena,camara);
