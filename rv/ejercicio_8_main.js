AJEDREZ.setup = function(){
  AJEDREZ.iluminacion = new THREE.AmbientLight( 0xFFFFFF );

  AJEDREZ.escena = new THREE.Scene(); 
  AJEDREZ.escena.add(AJEDREZ.iluminacion);
  
  //var cargadorCuadrosB = new THREE.TextureLoader();
 // cargadorCuadrosB.load("marmol_blanco.jpg",AJEDREZ.marmolBlanco);
  
 // var cargadorCuadrosN = new THREE.TextureLoader();
//  cargadorCuadrosN.load("marmol_negro.jpg",AJEDREZ.marmolNegro);
  AJEDREZ.tablero();
  var cargadorBase = new THREE.TextureLoader();
  cargadorBase.load("madera.JPG",AJEDREZ.base);
  
  var torreBlanca1 = new THREE.Mesh( new AJEDREZ.torreForma(), marmolB);
  var torreBlanca2 = new THREE.Mesh( new AJEDREZ.torreForma(), marmolB);
  var torreNegra1 = new THREE.Mesh( new AJEDREZ.torreForma(), marmolN);
  var torreNegra2 = new THREE.Mesh( new AJEDREZ.torreForma(), marmolN);
  torreBlanca1.position.y = 5;
  torreBlanca2.translate(70,5,70);
  torreNegra1.translate(0,5,70);
  torreNegra2.translate(70,5,0);
  AJEDREZ.escena.add(torreBlanca1);
  AJEDREZ.escena.add(torreBlanca2);
  AJEDREZ.escena.add(torreNegra1);
  AJEDREZ.escena.add(torreNegra2);
  
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

AJEDREZ.loop = function(){
  requestAnimationFrame(AJEDREZ.loop);
  
  if( (AJEDREZ.marcoMalla !== undefined) && (AJEDREZ.cuadros !== undefined) && (torreBlanca1 !== undefined) && (torreNegra1 !== undefined) )
  
  AJEDREZ.renderizador.render( AJEDREZ.escena, AJEDREZ.camara );
}

AJEDREZ.setup();
AJEDREZ.loop();
