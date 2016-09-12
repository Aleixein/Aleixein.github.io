var camara = new THREE.PerspectiveCamera();

var cuboForma = new THREE.BoxGeometry(10,10,10)
var colorGris = new THREE.MeshBasicMaterial({color: 0xcfcfcf});
var colorBlanco = new THREE.MeshBasicMaterial({color: 0xffffff});

var cuadros = new THREE.Object3D();

for (var i = 0; i < 8; i++ ) {
  for ( var j = 0; j < 8; j++ ) {
    if ( (i+j) % 2 == 0){
      cuadros.push ( new THREE.Mesh( cuboForma,colorBlanco ) );
    }
    else{
      cuadros.push ( new THREE.Mesh( cuboForma,colorGris ) );
    }
    var cuboMalla = new THREE.Mesh(cuadros);
      cuboMalla.position.x = i*10;
      cuboMalla.position.z = j*10;
  }
}

var escena = new THREE.Scene();
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );