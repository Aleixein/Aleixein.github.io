var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
var forma_tronco = new THREE.CylinderGeometry(2,2,5,20);
var textura_madera = new THREE.TextureLoader().load( "textures/water.jpg" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set( 4, 4 );
var material_tronco = new SpriteMaterial(textura_madera);
var tronco = new THREE.Mesh( forma_tronco, material_tronco ); 

escena.add(tronco);
renderizador.render(escena,camara);
