var estrella = new THREE.Shape();

figura.moveTo( 10, 50);
figura.lineTo( 30, 50);
figura.lineTo( 40, 70);
figura.lineTo( 50, 50);
figura.lineTo( 70, 50);
figura.lineTo( 55, 35);
figura.lineTo( 60, 10);
figura.lineTo( 40, 30);
figura.lineTo( 20, 10);
figura.lineTo( 25, 35);
figura.lineTo( 10, 50);

var forma = new THREE.ShapeGeometry(estrella);
var malla = new THREE.Mesh(forma);

var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 20;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena,camara );
