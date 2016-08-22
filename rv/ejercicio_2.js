var escena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
var forma_tronco = new THREE.CylinderGeometry(2,2,5,20);
var map = new THREE.TextureLoader().load( "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTnQwwrY6MTVWD5CRvroaJaRQ2zUpcqqt9nUvdk7cZUBXSFLrFH" );
var material_tronco = new THREE.MeshBasicMaterial( { map: map, color: 0xffffff, fog: true } );
var tronco = new THREE.Mesh( forma_tronco, material_tronco ); 

escena.add(tronco);
renderizador.render(escena,camara);
