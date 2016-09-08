car camara = new THREE.PerspectiveCamera();

var cuboForma = new THREE.BoxGeometry(10,10,10)
var gris = new THREE.MeshBasicMaterial({color: 0xcfcfcf});
var blanco = new THREE.MeshBasicMaterial({color: 0xffffff});

for (var i = 0; i < 8; i++ ) {
  for ( var j = 0; j < 8; j++ ) {
    var cuboMalla = new THREE.Mesh(cubo,
  }
}

var escena = new THREE.Scene();
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
