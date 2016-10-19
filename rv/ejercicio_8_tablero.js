var AJEDREZ = new Object();
var mat1=false;
var mat2=false;
var mat3=false;

/*AJEDREZ.tablero = function(){
 
  var cuboForma = new THREE.BoxGeometry(10,10,10);
  var cargadorCuadrosB = new THREE.TextureLoader();
  var cargadorCuadrosN = new THREE.TextureLoader();
  
  for (var i = 0; i < 8; i++ ) {
    for ( var j = 0; j < 8; j++ ) {
      if ( (i+j) % 2 == 0){            
        cargadorCuadrosB.load("marmol_blanco.jpg",function(textura){
                                                  AJEDREZ.colorB = new THREE.MeshLambertMaterial({map: textura});});
        var item = new THREE.Mesh( cuboForma,AJEDREZ.colorB );
      }
      else{
        cargadorCuadrosN.load("marmol_negro.jpg",function(textura){
                                                  AJEDREZ.colorN = new THREE.MeshLambertMaterial({map: textura});});
        var item = new THREE.Mesh( cuboForma,AJEDREZ.colorN );
      }
      item.position.x = i*10;
      item.position.z = j*10;
      AJEDREZ.cuadros.add(item);
    }
  }
  AJEDREZ.escena.add(AJEDREZ.cuadros);
}*/

AJEDREZ.base = function( textura) {
  var baseMadera = new THREE.MeshLambertMaterial( {map: textura} );
  mat3 = true;
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

AJEDREZ.marmolBlanco = function(textura){
  var colorBlanco = new THREE.MeshLambertMaterial( {map: textura} );
  mat1 = true;
  AJEDREZ.torreBlanca1 = new THREE.Mesh( new AJEDREZ.torreForma(), colorBlanco);
  AJEDREZ.torreBlanca2 = new THREE.Mesh( new AJEDREZ.torreForma(), colorBlanco);
  AJEDREZ.torreBlanca1.position.y = 5;
  AJEDREZ.torreBlanca2.position.x = 70;
  AJEDREZ.torreBlanca2.position.y = 5;
  AJEDREZ.torreBlanca2.position.z = 70;
  AJEDREZ.escena.add(AJEDREZ.torreBlanca1);
  AJEDREZ.escena.add(AJEDREZ.torreBlanca2);

  AJEDREZ.cuadrosBlancos = new THREE.Object3D(); 
  //var cuboForma = new THREE.BoxGeometry(10,10,10);
  
  for (var i = 0; i <= 7; i++ ) {
    for ( var j = 0; j <= 7; j++ ) {
      if ( (i+j) % 2 == 0){                    
        var itemBlancos = new THREE.Mesh( cuboForma,colorBlanco );       
        itemBlancos.position.x = i*10;
        itemBlancos.position.z = j*10;
      }     
      AJEDREZ.cuadrosBlancos.add(itemBlancos);
    }
  }
  AJEDREZ.escena.add(AJEDREZ.cuadrosBlancos);
}

AJEDREZ.marmolNegro = function(textura){
  var colorNegro = new THREE.MeshLambertMaterial( {map: textura} );
  mat2 = true;
  AJEDREZ.torreNegra1 = new THREE.Mesh( new AJEDREZ.torreForma(), colorNegro);
  AJEDREZ.torreNegra2 = new THREE.Mesh( new AJEDREZ.torreForma(), colorNegro);
  AJEDREZ.torreNegra1.position.y = 5;
  AJEDREZ.torreNegra1.position.z = 70;
  AJEDREZ.torreNegra2.position.x = 70;
  AJEDREZ.torreNegra2.position.y = 5;
  AJEDREZ.escena.add(AJEDREZ.torreNegra1);
  AJEDREZ.escena.add(AJEDREZ.torreNegra2);
 
  AJEDREZ.cuadrosNegros = new THREE.Object3D();
  //var cuboFormaN = new THREE.BoxGeometry(10,10,10);
  
  for (var i = 0; i <= 7; i++ ) {
    for ( var j = 0; j <= 7; j++ ) {
      if ( (i+j) % 2 == 0){        
       var wtf=0;
      }     
      else{
       var itemNegros = new THREE.Mesh( cuboForma,colorNegro ); 
       itemNegros.position.x = i*10;
       itemNegros.position.z = j*10;
      }
      AJEDREZ.cuadrosBlancos.add(itemNegros);
    }
  }
  AJEDREZ.escena.add(AJEDREZ.cuadrosNegros);
}
