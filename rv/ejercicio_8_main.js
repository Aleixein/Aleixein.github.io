AJEDREZ.setup = function(){
  AJEDREZ.iluminacion = new THREE.AmbientLight( 0xFFFFFF );

  AJEDREZ.escena = new THREE.Scene(); 
  AJEDREZ.escena.add(AJEDREZ.iluminacion);
    
  AJEDREZ.tablero();
  var cargadorBase = new THREE.TextureLoader();
  cargadorBase.load("madera.JPG",AJEDREZ.base); 
  
  var cargadorTorresblancas = new THREE.TextureLoader();
  cargadorTorresblancas.load("marmol_blanco.jpg",AJEDREZ.TorresBlancas);
  var cargadorTorresnegras = new THREE.TextureLoader();
  cargadorTorresnegras.load("marmol_negro.jpg",AJEDREZ.TorresNegras);  
  
  var campoVision = 55; //en grados
  var relacionAspecto = window.innerWidth/window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 600;

  AJEDREZ.camara = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano);
  AJEDREZ.camara.position.x = 100;
  AJEDREZ.camara.position.y = 100;
  AJEDREZ.camara.position.z = 160;
  AJEDREZ.camara.lookAt(AJEDREZ.escena.position);
  
  var lienzo = document.getElementById("tablero-textura");
  AJEDREZ.renderizador = new THREE.WebGLRenderer({canvas: lienzo, antialias: true});
  AJEDREZ.renderizador.setSize( window.innerWidth, window.innerHeight);
}

var didSetup = 1;

AJEDREZ.loop = function(){
  requestAnimationFrame(AJEDREZ.loop);
  
  if( mat1 && mat2 && mat3 ){
    if (didSetup == 1){
      AJEDREZ.setup();
      didSetup = 0;
    }
    AJEDREZ.renderizador.render( AJEDREZ.escena, AJEDREZ.camara );
  }
}

AJEDREZ.loop();
