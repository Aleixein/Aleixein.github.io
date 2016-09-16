var cuboForma = new THREE.BoxGeometry(10,10,10);

//var tableroForma = new THREE.Geometry();

var cuadros = new THREE.Object3D();

for (var i = 0; i < 8; i++ ) {
  for ( var j = 0; j < 8; j++ ) {
    if ( (i+j) % 2 == 0){
      var item = new THREE.Mesh( cuboForma,colorBlanco );
    }
    else{
      var item = new THREE.Mesh( cuboForma,colorGris );
    }
    item.position.x = i*10;
    item.position.z = j*10;
    cuadros.add(item);
  }
}

var izqForma = new THREE.BoxGeometry(10,10,100);
var derForma = new THREE.BoxGeometry(10,10,100);
var abajoForma = new THREE.BoxGeometry(80,10,10);
var arribaForma = new THREE.BoxGeometry(80,10,10);
izqForma.translate(-10,0,35);
derForma.translate(80,0,35);
abajoForma.translate(35,0,80);
arribaForma.translate(35,0,-10);

var izqMalla = new THREE.Mesh(izqForma);
var derMalla = new THREE.Mesh(derForma);
var abajoMalla = new THREE.Mesh(abajoForma);
var arribaMalla = new THREE.Mesh(arribaForma);

var marcoForma = new THREE.Geometry();

marcoForma.merge( izqMalla.geometry, izqMalla.matrix );
marcoForma.merge( derMalla.geometry, derMalla.matrix );
marcoForma.merge( abajoMalla.geometry, abajoMalla.matrix );
marcoForma.merge( arribaMalla.geometry, arribaMalla.matrix );

var marcoMaterial = new THREE.MeshBasicMaterial( {color: 0x895D05 });
var marcoMalla = new THREE.Mesh( marcoForma, marcoMaterial );
