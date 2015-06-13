//create 20x20 grid
//empty square = 0 
//snake = 'S' 
//fly = 'F'

const x = [ 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 
            0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, ];

var grid = new Array(20);
 for (var y = 0; y < 20; y++) {
 grid[y] = x;
}

var flyLocation = {
  i: null
}

//create random x,y coorindates
function createFly() {
  flyLocation.i = Math.floor((Math.random() * 400) + 0);
  list.array[flyLocation.i] = 'F';
}

//grid values to one dimensional array
var list = {
  array: []
}

//variable to send out to window
var out = {
  toWindow: ''
}
 
//change grid output to div's
function outputGrid() {
  for (var square = 0; square < 400; square++) {
    if (list.array[square] === 0) {
      out.toWindow += '<div class="square"></div>';
    } else if (list.array[square] === 'F') {
      out.toWindow += '<div class="square fly"></div>';
    }
  }  
}

//populate grid
function createGrid() {
  for (var y = 0; y < 20; y++) {
    for (var x = 0; x < 20; x++) {
      list.array.push(grid[y][x]);
    }
  }    
}

$(document).ready( function() { 
  createGrid();
  setInterval(function(){
  $( ".snake-board" ).empty();
  createFly();
  outputGrid();
  $( ".snake-board" ).append(out.toWindow);
  list.array[flyLocation.i] = 0;
  out.array = [];
  out.toWindow = '';
  }, 400);
})
 
 

 
 
   
 
