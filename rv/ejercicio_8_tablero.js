var AJEDREZ = new Object();

AJEDREZ.cuadrosBlancos = function( textura ){
  var marmolBlanco = new THREE.MeshLambertMaterial( {map: textura} ); 
  var cuboForma = new THREE.BoxGeometry(10,10,10);
  AJEDREZ.cuadrosB = new THREE.Object3D();
  
  for (var i = 0; i < 8; i++ ) {
    for ( var j = 0; j < 8; j++ ) {
      if ( (i+j) % 2 == 0){
        var item = new THREE.Mesh( cuboForma,marmolBlanco );
      }
      item.position.x = i*10;
      item.position.z = j*10;
      AJEDREZ.cuadrosB.add(item);
    }
  }
  AJEDREZ.escena.add(AJEDREZ.cuadrosB);
}

AJEDREZ.cuadrosNegros = function( textura ){
  var marmolNegro = new THREE.MeshLambertMaterial( {map: textura} );
  var cuboForma = new THREE.BoxGeometry(10,10,10);
  AJEDREZ.cuadrosN = new THREE.Object3D();
  
  for (var i = 0; i < 8; i++ ) {
    for ( var j = 0; j < 8; j++ ) {
      if ( (i+j) % 2 == 1){        
        var item1 = new THREE.Mesh( cuboForma,marmolNegro );
      }
      item1.position.x = i*10;
      item1.position.z = j*10;
      AJEDREZ.cuadrosN.add(item1);
    }
  }
  AJEDREZ.escena.add(AJEDREZ.cuadrosN);
}

AJEDREZ.base = function( textura) {
  var baseMadera = new THREE.MeshLambertMaterial( {map: textura} );
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
  
  AJEDREZ.marcoMalla = new THREE.Mesh( marcoForma, baseMadera );
  AJEDREZ.escena.add(AJEDREZ.marcoMalla);
}
