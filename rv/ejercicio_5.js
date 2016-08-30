var puntos = [];

for ( var i = 0; i < 50; i++ ){
  puntos.push( new THREE.Vector2( Math.sin( i*0.2 ) * 15 + 50, ( i - 5 ) * 2 ));
}


var escena = new THREE.Scene();
escena.add( torreMalla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setsize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
