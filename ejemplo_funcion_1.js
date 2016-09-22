function init( p ) {
  var malla = new THREE.Mesh( new THREE.BoxGeometry( p, p, p ), 
                              new THREE.MeshNormalMaterial());
  
  escena = new THREE.Scene();
  escena.add(malla);
  
  camara = new THREE.PerspectiveCamera();
  
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild( renderizador.domElement );
} //escena, camara y renderizador no tienen var porque son variables globales, se definen despues pero antes de
  //la ejecución de las funciones

var main = function(p){
  renderizador.render(escena,camara);
}

var escena, camara, renderizador;
init(1);
main(2);
