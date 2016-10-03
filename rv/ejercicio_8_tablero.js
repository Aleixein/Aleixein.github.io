var TEXTURA = new Object();
  
TEXTURA.tablero = function(){
  var cuboForma = new THREE.BoxGeometry(10,10,10);
  TEXTURA.cuadros = new THREE.Object3D();
  
  var cargadorBlanco = new THREE.TextureLoader();
  var cargadorNegro = new THREE.TextureLoader();
  cargadorBlanco.load("marmol_blanco.jpg",TEXTURA.blanco);
  cargadorNegro.load("marmol_negro.jpg",TEXTURA.negro);

  for (var i = 0; i < 8; i++ ) {
    for ( var j = 0; j < 8; j++ ) {
      if ( (i+j) % 2 == 0){
        var item = new THREE.Mesh( cuboForma,marmolBlanco );
      }
      else{
        var item = new THREE.Mesh( cuboForma,marmolNegro );
      }
      item.position.x = i*10;
      item.position.z = j*10;
      TEXTURA.cuadros.add(item);
    }
  }
}

TEXTURA.base = function(){
  var cargadorBase = new THREE.TextureLoader();
  cargadorBase.load("madera.jpg",TEXTURA.madera);
  
  var izqForma = new THREE.BoxGeometry(10,10,100);
  var derForma = new THREE.BoxGeometry(10,10,100);
  var abajoForma = new THREE.BoxGeometry(80,10,10);
  var arribaForma = new THREE.BoxGeometry(80,10,10);
  izqForma.translate(-10,0,35);
  derForma.translate(80,0,35);
  abajoForma.translate(35,0,80);
  arribaForma.translate(35,0,-10);
  
  var izqMalla = new THREE.Mesh(izqForma);
  var derMalla = new THREE.Mesh(derForma);
  var abajoMalla = new THREE.Mesh(abajoForma);
  var arribaMalla = new THREE.Mesh(arribaForma);
  
  var marcoForma = new THREE.Geometry();
  
  marcoForma.merge( izqMalla.geometry, izqMalla.matrix );
  marcoForma.merge( derMalla.geometry, derMalla.matrix );
  marcoForma.merge( abajoMalla.geometry, abajoMalla.matrix );
  marcoForma.merge( arribaMalla.geometry, arribaMalla.matrix );
  
  TEXTURA.marcoMalla = new THREE.Mesh( marcoForma, baseMadera );
}