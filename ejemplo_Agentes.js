function Agent ( x=0, y=0){ //Constructor
  THREE.Object3D.call(this);
  this.position.x = x;
  this.position.y = y;
}

Agent.prototype = new THREE.Object3D(); //Herencia

Agent.prototype.sense = function(environment) {};
Agent.prototype.plan = function(environment) {};
Agent.prototype.act = function(environment) {};

function Environment(){
 THREE.Scene.call(this);
}

Environment.prototype = new THREE.Scene();

Environment.prototype.sense = function(){
  for ( var i=0; i < this.children.length; i++ ){
    if ( this.children[i].sense !== undefined ) //Children son los objetos agregados a la escena (arreglo)
      this.children[i].sense(this);
  }
}

Environment.prototype.plan = function(){
  for ( var i=0; i < this.children.length; i++ )
    if ( this.children[i].plan !== undefined )  // Si puede planificar
      this.children[i].plan(this);              // que planifique sobre el entorno
}

Environment.prototype.act = function(){
  for ( var i=0; i < this.children.length; i++ ){
    if ( this.children[i].act !== undefined )   // Si puede actuar
      this.children[i].act(this);               // que actúe sobre el entorno
  }
}

function Pelota( r, x, y){
  Agent.call(this, x, y);   //Hereda de clase Agent
  this.add ( new THREE.Mesh ( new THREE.SphereGeometry(r), new THREE.MeshNormalMaterial() ) );
  
  this.step = 0.1;
  this.colision = 0;
  this.radius = r;
  this.sensor = new THREE.Raycaster( this.position, new THREE.Vector3( 1, 0, 0 ) );  
}

Pelota.prototype = new Agent();

Pelota.prototype.sense = function(environment){
  this.sensor.set( this.position, new THREE.Vector3( 1, 0, 0 ) );
  var obstaculo1 = this.sensor.intersectObjects( environment.children, true );
  
  this.sensor.set( this.position, new THREE.Vector3( -1, 0, 0) );
  var obstaculo2 = tihs.sensor.intersectObjects( environment.children, true );
  
  if ((obstaculo1.length > 0 &&             // Determina si la distancia al primer objeto es <= al radio
      (obstaculo1[0].distance <= this.radius)) ||
      (obstaculo2.length > 0 &&             // Obstáculo 1 es en un sentido, obstáculo 2 en el otro
      (obstaculo2[0].distance <= this.radius))
        this.colision = 1;                  // Marca colisión si hay obstáculo en un sentido o en el otro
  else
        this.colision = 0;
}

Pelota.prototype.act = function(environment){
  if ( this.colision === 1 )
    this.step = -this.step;
  this.position.x += this.step;
}

function Pared( size, x=0, y=0){
  THREE.Object3D.call(this, x, y);
  
  this.add(new THREE.Mesh( new THREE.BoxGeometry(size, size, size), new THREE.MeshNormalMaterial() ));
  this.size = size;
  this.position.x = x;
  this.position.y = y;
}

Pared.prototype = new TRHEE.Object3D();


//falta setup y loop  https://github.com/jeab94/jeab94.github.io/blob/master/rv/ejemplo-Agentes.js
