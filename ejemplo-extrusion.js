var diente1 = new THREE.Shape(); 

diente1.moveTo( 0, 9 );
diente1.lineTo( 1, 9 );
diente1.lineTo( 1, 11);
diente1.lineTo( 0, 11);
diente1.lineTo( 0, 9 );

var diente1Forma = new THREE.ExtrudeGeometry( diente1, {amount: 3} );

var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( diente1Forma, material );
malla.rotateX(Math.PI/4);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 35;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95,window.innerHeight*.95 );
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
