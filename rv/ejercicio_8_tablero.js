var TEXTURA = new Object();
TEXTURA.cuadros = new THREE.Object3D();

TEXTURA.cuadrosBlancos = function( textura ){
  var marmolBlanco = new THREE.MeshLambertMaterial( {map: textura} ); 
  //var cuboForma = new THREE.BoxGeometry(10,10,10);
  //TEXTURA.cuadros = new THREE.Object3D();
  
  for (var i = 0; i < 8; i++ ) {
    for ( var j = 0; j < 8; j++ ) {
      if ( (i+j) % 2 == 0){
        var item = new THREE.Mesh( cuboForma,marmolBlanco );
      }
      item.position.x = i*10;
      item.position.z = j*10;
      TEXTURA.cuadros.add(item);
    }
  }
  TEXTURA.escena.add(TEXTURA.cuadros);
}

TEXTURA.cuadrosNegros = function( textura ){
  var marmolNegro = new THREE.MeshLambertMaterial( {map: textura} );
  //var cuboForma = new THREE.BoxGeometry(10,10,10);
  //TEXTURA.cuadros = new THREE.Object3D();
  
  for (var i = 0; i < 8; i++ ) {
    for ( var j = 0; j < 8; j++ ) {
      if ( (i+j) % 2 == 1){        
        var item = new THREE.Mesh( cuboForma,marmolNegro );
      }
      item.position.x = i*10;
      item.position.z = j*10;
      TEXTURA.cuadros.add(item);
    }
  }
  TEXTURA.escena.add(TEXTURA.cuadros);
}

TEXTURA.base = function( textura) {
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
  
  TEXTURA.marcoMalla = new THREE.Mesh( marcoForma, baseMadera );
  TEXTURA.escena.add(TEXTURA.marcoMalla);
}

TEXTURA.setup = function(){
  TEXTURA.iluminacion = new THREE.AmbientLight( 0xFFFFFF );

  TEXTURA.escena = new THREE.Scene(); 
  TEXTURA.escena.add(TEXTURA.iluminacion);
  
  var cargadorCuadrosB = new THREE.TextureLoader();
  cargardorCuadrosB.load("marmol_blanco.jpg",TEXTURA.cuadrosBlancos);
  
  var cargadorCuadrosN = new THREE.TextureLoader();
  cargardorCuadrosN.load("marmol_negro.jpg",TEXTURA.cuadrosNegros);
  
  var cargadorBase = new THREE.TextureLoader();
  cargardorBase.load("madera.jpg",TEXTURA.base);
  
  var campoVision = 55; //en grados
  var relacionAspecto = window.innerWidth/window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 600;

  TEXTURA.camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);
  TEXTURA.camara.position.x = 100;
  TEXTURA.camara.position.y = 100;
  TEXTURA.camara.position.z = 160;
  TEXTURA.camara.lookAt(TEXTURA.escena.position);
  
  var lienzo = document.getElementById("tablero-textura");
  TEXTURA.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
  TEXTURA.renderizador.setSize( window.innerWidth, window.innerHeight);
}

TEXTURA.loop = function(){
  requestAnimationFrame(TEXTURA.loop);
  
  if( (TEXTURA.marcoMalla !== undefined) && (TEXTURA.cuadros !== undefined) )
  
  TEXTURA.renderizador.render( TEXTURA.escena, TEXTURA.camara );
}
