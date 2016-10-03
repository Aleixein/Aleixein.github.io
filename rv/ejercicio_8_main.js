TEXTURA.setup = function(){
  TEXTURA.iluminacion = new THREE.AmbientLight( 0xFFFFFF );

  TEXTURA.escena = new THREE.Scene(); 
  TEXTURA.escena.add(TEXTURA.iluminacion);
  
  var cargadorCBlancos = new THREE.TextureLoader();
  cargardorCBlancos.load("marmol_blanco.jpg",TEXTURA.cuadrosBlancos);
  
  var cargadorCNegros = new THREE.TextureLoader();
  cargardorCNegros.load("marmol_negro.jpg",TEXTURA.cuadrosNegros);
  
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


TEXTURA.setup();
TEXTURA.loop();
