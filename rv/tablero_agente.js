function Agent ( x = 0, y = 0){
  THREE.Object3D.call(this);
  this.position.x = x;
  this.position.y = y;
}

Agent.prototype = new THREE.Object3D();

Agent.prototype.sense = function (environment) {};
Agent.prototype.plan = function (environment) {};
Agent.prototype.act = function (environment) {};

function Sensor (position, direction){
  THREE.Raycaster.call(this, position, direction);
  this.colition = false;
}

Sensor.prototype = new THREE.Raycaster();

function Torre(color, x, y){
  Agent.call(this,x,y);
  this.sensor = new Sensor();
  this.actuator = new THREE.Mesh(new torreForma, color);
  this.actuator.commands = [];
  this.add(this.actuator);
}

Torre.prototype = new Agent();

Torre.prototype.sense = function(environment){
};

Torre.prototype.plan = function(environment){
};

Torre.prototype.act = function(environment){
  var command = this.actuator.commands.pop();
  
  if (command === undefined)
  console.log('Undefined command');
  else if (command in this.operations)
  this.operations[command](this);
  else
  console.log('Unknown command');
};

Torre.prototype.operations = {};

function Environment(){
  THREE.Scene.call(this);
}

Environment.prototype = new THREE.Scene();

Environment.prototype.sense = function(){
  for (var i = 0; i < this.children.length; i++){
    if (this.children[i].sense !== undefined )
    this.children[i].sense(this);
  }
}

Environment.prototype.plan = function(){
  for ( var i = 0; i < this.children.length; i++){
    if (this.children[i].plan !== undefined)
    this.children[i].plan(this);
  }
}

Environment.prototype.act = function(){
  for (var i = 0; i < this.children.length; i++){
    if (this.children[i].act !== undefined)
    this.children[i].act(this);
  }
}

Environment.prototype.setMap = function(map){
  var _offset = Math.floor(map.length/2);
  
  for ( var i=0; i<map.length; i++)
    for (var j=0; j<map.length; j++){
      if (map[i][j] === "T")
        this.add( new Torre(blanco, j-_offset, -(i-_offset)));
      else if (map[i][j] === "t")
        this.add( new Torre(negro, j-_offset, -(i-_offset)));
    }
}

function Setup(){
  var iluminacion = new THREE.AmbientLight( 0xFFFFFF );
     
  var cargadorBase = new THREE.TextureLoader();
  cargadorBase.load("madera.JPG",base); 
  //var cargadorMarmolBlanco = new THREE.TextureLoader();
  //cargadorMarmolBlanco.load("marmol_blanco.jpg",AJEDREZ.marmolBlanco);  
  //var cargadorMarmolNegro = new THREE.TextureLoader();
  //cargadorMarmolNegro.load("marmol_negro.jpg",AJEDREZ.marmolNegro); 
  
  var mapa = new Array();
  mapa[0] = "T      t";
  mapa[1] = "        ";
  mapa[2] = "        ";
  mapa[3] = "        ";
  mapa[4] = "        ";
  mapa[5] = "        ";
  mapa[6] = "        ";
  mapa[7] = "t      T";
  
  environment = new Environment();
  
  environment.setMap(mapa);
  
  var campoVision = 55; //en grados
  var relacionAspecto = window.innerWidth/window.innerHeight;
  var planoCercano = 1;
  var planoLejano = 600;

  camera = new THREE.PerspectiveCamera( campoVision, relacionAspecto, planoCercano, planoLejano );

  camera.position.x = 100;
  camera.position.y = 100;
  camera.position.z = 160;

  camera.lookAt(0,0,0);
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild( renderer.domElement );
  
  environment.add(iluminacion);
  environment.add(camera);
  environment.add(marcoMalla);
}

function loop(){
  requestAnimationFrame(loop);
  
  environment.sense();
  environment.plan();
  environment.act();
  
  renderer.render(environment, camera);
}

var environment, camara, renderer, marcoMalla;

Setup();
loop();
