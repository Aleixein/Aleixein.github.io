var AJEDREZ = new Object();

AJEDREZ.marmolBlanco = function( textura){
  AJEDREZ.colorBlanco = new THREE.MeshLambertMaterial( {map: textura} );
}

AJEDREZ.marmolNegro = function( textura){
  AJEDREZ.colorNegro = new THREE.MeshLambertMaterial( {map: textura} );
}

AJEDREZ.tablero = function(){
  //var cargadorCuadrosB = new THREE.TextureLoader();
 // cargadorCuadrosB.load("marmol_blanco.jpg",AJEDREZ.marmolBlanco);  
  //var cargadorCuadrosN = new THREE.TextureLoader();
  //cargadorCuadrosN.load("marmol_negro.jpg",AJEDREZ.marmolNegro);
  
  AJEDREZ.cuadros = new THREE.Object3D();
  var cuboForma = new THREE.BoxGeometry(10,10,10);
 
  for (var i = 0; i < 8; i++ ) {
    for ( var j = 0; j < 8; j++ ) {
      if ( (i+j) % 2 == 0){
        var item = new THREE.Mesh( cuboForma,AJEDREZ.colorBlanco );
      }
      else{
        var item = new THREE.Mesh( cuboForma,AJEDREZ.colorNegro );
      }
      //var item = new THREE.Mesh( cuboForma,material );
      item.position.x = i*10;
      item.position.z = j*10;
      AJEDREZ.cuadros.add(item);
    }
  }
  AJEDREZ.escena.add(AJEDREZ.cuadros);
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
