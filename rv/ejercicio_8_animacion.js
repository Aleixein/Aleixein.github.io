function init(p){
  malla = new THREE.Mesh( new THREE.BoxGeometry(p,p,p),
                          new THREE.MeshNormalMaterial());
  
  escena = new THREE.Scene();
  escena.add(malla);
  
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 10*p;
  step=0.1;
  
  renderizador = new THREE.WebGLRenderer();
  renderizador.setSize(700,700);
  document.body.appendChild( renderizador.domElement );
}

var loop = function(){
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
  if(Math.abs(malla.position.x)>=4.5){
    step=-step;
  }
  malla.position.x+=step;
  malla.position.y+=step;
  malla.rotateZ(step);
}

var escena,camara,renderizador,malla;
init(1);
loop();
