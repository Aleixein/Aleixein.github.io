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
}
