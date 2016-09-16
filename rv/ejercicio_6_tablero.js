var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;

var cuboForma = new THREE.BoxGeometry(10,10,10)

//var tableroForma = new THREE.Geometry();

var cuadros = new THREE.Object3D();

for (var i = 0; i < 8; i++ ) {
  for ( var j = 0; j < 8; j++ ) {
    if ( (i+j) % 2 == 0){
      var item = new THREE.Mesh( cuboForma,colorBlanco );
    }
    else{
      var item = new THREE.Mesh( cuboForma,colorGris );
    }
    item.position.x = i*10;
    item.position.z = j*10;
    cuadros.add(item);
  }
}

var escena = new THREE.Scene();
escena.add(cuadros);
escena.add(torres);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
