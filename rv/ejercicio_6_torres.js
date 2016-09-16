var torres = new THREE.Object3D();
var colorGris = new THREE.MeshBasicMaterial({color: 0x676767});
var colorBlanco = new THREE.MeshBasicMaterial({color: 0xffffff});

var base1Forma = new THREE.CylinderGeometry( 3.5, 3.5, 1, 20);
var base2Forma = new THREE.CylinderGeometry( 3, 3, 1, 20);
var base3Forma = new THREE.CylinderGeometry( 2, 3, 1, 20);
var base4Forma = new THREE.CylinderGeometry( 2, 2, 4, 20);
var base5Forma = new THREE.CylinderGeometry( 3, 2, 1, 20);
var cimaForma = new THREE.CylinderGeometry( 3, 3, 1, 20);
var diente1Forma = new THREE.BoxGeometry( 1.5, 1, 1);
var diente2Forma = new THREE.BoxGeometry( 1.5, 1, 1);
var diente3Forma = new THREE.BoxGeometry( 1, 1, 1.5);
var diente4Forma = new THREE.BoxGeometry( 1, 1, 1.5);

base2Forma.translate(0, 1, 0);
base3Forma.translate(0, 2, 0);
base4Forma.translate(0, 4.5, 0);
base5Forma.translate(0, 7, 0);
cimaForma.translate(0, 8, 0);
diente1Forma.translate( 0, 9, 2.35);
diente2Forma.translate(0, 9, -2.35);
diente3Forma.translate( 2.35, 9, 0);
diente4Forma.translate(-2.35, 9, 0);

var base1Malla = new THREE.Mesh(base1Forma);
var base2Malla = new THREE.Mesh(base2Forma);
var base3Malla = new THREE.Mesh(base3Forma);
var base4Malla = new THREE.Mesh(base4Forma);
var base5Malla = new THREE.Mesh(base5Forma);
var cimaMalla = new THREE.Mesh(cimaForma);
var diente1Malla = new THREE.Mesh(diente1Forma);
var diente2Malla = new THREE.Mesh(diente2Forma);
var diente3Malla = new THREE.Mesh(diente3Forma);
var diente4Malla = new THREE.Mesh(diente4Forma);

var torreForma = new THREE.Geometry();

torreForma.merge(base1Malla.geometry, base1Malla.matrix);
torreForma.merge(base2Malla.geometry, base2Malla.matrix);
torreForma.merge(base3Malla.geometry, base3Malla.matrix);
torreForma.merge(base4Malla.geometry, base4Malla.matrix);
torreForma.merge(base5Malla.geometry, base5Malla.matrix);
torreForma.merge( cimaMalla.geometry, cimaMalla.matrix );
torreForma.merge(diente1Malla.geometry, diente1Malla.matrix);
torreForma.merge(diente2Malla.geometry, diente2Malla.matrix);
torreForma.merge(diente3Malla.geometry, diente3Malla.matrix);
torreForma.merge(diente4Malla.geometry, diente4Malla.matrix);

for ( var i = 0; i < 2; i++){
  for (var j = 0; j < 2; j++){
    if ((i+j) % 2 == 0) {
      var item = new THREE.Mesh(torreForma, colorGris);
    }
    else{
      var item = new THREE.Mesh(torreForma, colorBlanco);
    }
    item.position.x = i*70;
    item.position.z = j*70;
    item.position.y = 5;
    torres.add(item);
  }
}
