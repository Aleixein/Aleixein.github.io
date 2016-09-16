var camara = new THREE.OrthographicCamera();

camara.left = window.innerWidth/-12;
camara.right = window.innerWidth/12;
camara.top = window.innerHeight/12;
camara.bottom = window.innerHeight/-12;
camara.near = 0.1;
camara.far = 200;
camara.updateProjectionMatrix();

camara.position.x = 100;
camara.position.z = 100;
camara.position.y = 100;

var escena = new THREE.Scene();
camara.lookAt(escena.position);
escena.add(marcoMalla);
escena.add(cuadros);
escena.add(torres);
escena.add( aristas );
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
