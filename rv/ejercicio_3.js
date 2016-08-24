var forma = new THREE.Geometry();

forma.vertices.push( new THREE.Vector3( 1, 0, 1) );
forma.vertices.push( new THREE.Vector3( 1, 0, -1));
forma.vertices.push( new THREE.Vector3(-1, 0, -1));
forma.vertices.push( new THREE.Vector3( -1, 0, 1));
forma.vertices.push( new THREE.Vector3( 1, 2, 1) );
forma.vertices.push( new THREE.Vector3( 1, 2, -1));
forma.vertices.push( new THREE.Vector3(-1, 2, -1));
forma.vertices.push( new THREE.Vector3( -1, 2, 1));

forma.faces.push( new THREE.Face3( 5, 4, 0) );
forma.faces.push( new THREE.Face3( 0, 1, 5) );
forma.faces.push( new THREE.Face3( 7, 6, 2) );
forma.faces.push( new THREE.Face3( 2, 3, 7) );
//forma.faces.push( new THREE.Face3( 2, 6, 7) );
//forma.faces.push( new THREE.Face3( 7, 3, 2) );
//forma.faces.push( new THREE.Face3( 2, 1, 3) );
//forma.faces.push( new THREE.Face3( 3, 0, 1) );
//forma.faces.push( new THREE.Face3( 6, 5, 4) );
//forma.faces.push( new THREE.Face3( 4, 7, 6) );
//forma.faces.push( new THREE.Face3( 3, 7, 4) );
//forma.faces.push( new THREE.Face3( 4, 0, 3) );

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material = new THREE.MeshNormalMaterial();

var cubo = new THREE.Mesh( forma, material);
cubo.rotateX(Math.PI/4);
cubo.rotateY(Math.PI/4);

var escena = new THREE.Scene();
escena.add(cubo);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement ); 
renderizador.render( escena, camara );
