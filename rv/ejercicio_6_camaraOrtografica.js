var camara = new THREE.OrthographicCamera();

camara.left = window.innerWidth/-8;
camara.right = window.innerWidth/8;
camara.top = window.innerHeight/8;
camara.bottom = window.innerHeight/-8;
camara.near = 0.1;
camara.far = 200;
camara.updateProjectionMatrix();

camara.position.z = 120;
camara.position.y = 35;

var escena = new THREE.Scene();
camara.lookAt(escena.position);
escena.add(marcoMalla);
escena.add(cuadros);
escena.add(torres);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
