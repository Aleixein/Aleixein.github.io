//var puntos = [];

//for ( var i = 0; i < 50; i++ ){
//  puntos.push( new THREE.Vector2( Math.sin( i*0.2 ) * 15 + 50, ( i - 5 ) * 2 ));
//}

var base1Forma = new THREE.CylinderGeometry( 7, 7, 1);
var base2Forma = new THREE.CylinderGeometry( 6, 6, 1);
var base3Forma = new THREE.CylinderGeometry( 4, 6, 1);
var base4Forma = new THREE.CylinderGeometry( 4, 4, 4);
var base5Forma = new THREE.CylinderGeometry( 6, 4, 1);

base2Forma.translate(0.5, 1, 0);
base3Forma.translate(0.5, 2, 0);
base4Forma.translate(1.5, 3, 0);
base5Forma.translate(0.5, 7, 0);

var base1Malla = new THREE.Mesh(base1Forma);
var base2Malla = new THREE.Mesh(base2Forma);
var base3Malla = new THREE.Mesh(base3Forma);
var base4Malla = new THREE.Mesh(base4Forma);
var base5Malla = new THREE.MEsh(base5Forma);

var torreForma = new THREE.Geometry();

torreForma.merge(base1Forma.gometry, base1Forma.matrix);
torreForma.merge(base2Forma.gometry, base2Forma.matrix);
torreForma.merge(base3Forma.gometry, base3Forma.matrix);
torreForma.merge(base4Forma.gometry, base4Forma.matrix);
torreForma.merge(base5Forma.gometry, base5Forma.matrix);

var material = new THREE.MeshNormalMaterial();
var torreMalla = new THREE.MEsh( torreForma, material );

var escena = new THREE.Scene();
escena.add( torreMalla );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setsize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
