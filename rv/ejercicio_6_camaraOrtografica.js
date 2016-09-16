var camara = new THREE.OrthographicCamera();

camara.left = window.innerWidth/-4;
camara.right = window.innerWidth/4;
camara.top = window.innerHeight/4;
camara.bottom = window.innerHeight/-4;
camara.near = 0.1;
camara.far = 300;
camara.updateProjectionMatrix();

//camara.position.x = 35;
camara.position.z = 130;
camara.position.y = 30;

var escena = new THREE.Scene();
escena.add(marcoMalla);
escena.add(cuadros);
escena.add(torres);
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
