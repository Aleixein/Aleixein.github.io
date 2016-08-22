var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 10;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
var forma_tronco = new THREE.CylinderGeometry(1,1,3,20);
var material_tronco = new THREE.MeshBasicMaterial( { color:0x683603, wireframeLinewidth:2 } );
var tronco = new THREE.Mesh( forma_tronco, material_tronco ); 

escena.add(tronco);
renderizador.render(escena,camara);
