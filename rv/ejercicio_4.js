var estrella = new THREE.Shape();

estrella.moveTo( 10, 50);
estrella.lineTo( 30, 50);
estrella.lineTo( 40, 70);
estrella.lineTo( 50, 50);
estrella.lineTo( 70, 50);
estrella.lineTo( 55, 35);
estrella.lineTo( 60, 10);
estrella.lineTo( 40, 30);
estrella.lineTo( 20, 10);
estrella.lineTo( 25, 35);
estrella.lineTo( 10, 50);

var formaEstrella = new THREE.ShapeGeometry(estrella);
var mallaEstrella = new THREE.Mesh(formaEstrella);

var escena = new THREE.Scene();
escena.add(mallaEstrella);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 160;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena,camara );
