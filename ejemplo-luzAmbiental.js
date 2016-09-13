var iluminacion = new THREE.AmbientLight( 0xFFFFFF );
//La luz ambiental llega de todas partes, no produce sombras en el objeto

var forma = new THREE.SphereGeometry(1);
var material = new THREE.MeshLambertMaterial( { color: "0#00cc00" } );
var malla = new THREE.Mesh( forma, material );

var escena = new THREE.Scene();
escena.add(malla);
escena.add(iluminacion);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 5;

var lienzo = document.getElementById("luzAmbiental");
var renderizador = new THREE.WebGLRenderer( {canvas: lienzo, antialias: true });

renderizador.setSize( 600, 600);
renderizador.render( escena, camara );
