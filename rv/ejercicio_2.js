var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 10;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );

var forma_tronco = new THREE.CylinderGeometry(1,1,3,20);
var material_tronco = new THREE.MeshStandardMaterial( { color:0x683603 } );
var tronco = new THREE.Mesh( forma_tronco, material_tronco ); 

var forma_hojas = new THREE.SphereGeometry(2,32,32);
var material_hojas = new THREE.MeshStandardMaterial( { color:0x0A8131 } );
var hojas = new THREE.Mesh( forma_hojas, material_hojas);

hojas.position.y=5;

escena.add(tronco);
escena.add(hojas);
renderizador.render(escena,camara);
