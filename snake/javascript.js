//the multidimensional grid
var inputGrid = {
  values: []
}

//create an empty 20x20 multidimensional grid - default value 0 
function createInputGrid() {
  var newGrid = new Array(20);
  for (var y = 0; y < 20; y++) {
    newGrid[y] = [ 0, 0, 0, 0, 0,
                   0, 0, 0, 0, 0, 
                   0, 0, 0, 0, 0,
                   0, 0, 0, 0, 0 ];
  }
  inputGrid.values = newGrid;
}

//snake object
var snake = {
  coordinates: [[2,9],[1,9]],
  speed: 100,
  direction: 'left'
}

//look at current snake direction and move snake
function moveSnake() {
  switch (snake.direction) {
  case 'down':
    moveSnakeDown();
    break;
  case 'up':
    moveSnakeUp();
    break;
  case 'left':
    moveSnakeLeft();
    break;
  case 'right':
    moveSnakeRight();
    break;
  }
}

//for each coordinate of snake, add it to the main grid
function addSnakeToGrid() {
  for (var b = 0; b < snake.coordinates.length; b++) {
     inputGrid.values[snake.coordinates[b][0]][snake.coordinates[b][1]] = 'S';
  }  
}

//see if the snake is out of bounds! 
function checkSnake() {
  if (snake.coordinates[0][0] > 19 || snake.coordinates[0][1] > 19) {
    alert('game over - snek is dead!')
  }

  if (snake.coordinates[0][0] < 0 || snake.coordinates[0][1] < 0) {
    alert('game over - snek is dead!')
  }
}

function moveSnakeDown() {
  //move the snake head!
  snake.coordinates.unshift([(snake.coordinates[0][0]+1), snake.coordinates[0][1]]);
  
  //remove tail from inputGrid!
  var last = snake.coordinates.slice(-1)[0];
  inputGrid.values[last[0]][last[1]] = 0

  //snip tail from coordinates
  snake.coordinates.pop();
}

function moveSnakeUp() {
  snake.coordinates.unshift([(snake.coordinates[0][0]-1), snake.coordinates[0][1]]);
  var last = snake.coordinates.slice(-1)[0];
  inputGrid.values[last[0]][last[1]] = 0
  snake.coordinates.pop();
}

function moveSnakeLeft() {
  snake.coordinates.unshift([(snake.coordinates[0][0]), snake.coordinates[0][1]-1]);
  var last = snake.coordinates.slice(-1)[0];
  inputGrid.values[last[0]][last[1]] = 0
  snake.coordinates.pop();
}

function moveSnakeRight() {
  snake.coordinates.unshift([(snake.coordinates[0][0]), snake.coordinates[0][1]+1]);
  var last = snake.coordinates.slice(-1)[0];
  inputGrid.values[last[0]][last[1]] = 0
  snake.coordinates.pop();
}

//fly object
var fly = {
  coordinates: null
}

//generate random x,y coorindates for fly
function addFlyToGrid() {
  fly.coordinates = Math.floor((Math.random() * 400) + 0);
  reducedArray.array[fly.coordinates] = 'F';
}

//grid values placed into one dimensional array (for later outputing)
var reducedArray = {
  array: []
}

//variable to send out to window
var out = {
  toWindow: ''
}
 
//change grid value to div and send to out.toWindow
function outputReducedArray() {
  for (var square = 0; square < 400; square++) {
    if (reducedArray.array[square] === 0) {
      out.toWindow += '<div class="square"></div>';
    } else if (reducedArray.array[square] === 'F') {
      out.toWindow += '<div class="square fly"></div>';
    } else if (reducedArray.array[square] === 'S') {
      out.toWindow += '<div class="square snake"></div>';
    }
  }  
}

//populate reducedArray from inputGrid
function createReducedArray() {
  for (var y = 0; y < 20; y++) {
    for (var x = 0; x < 20; x++) {
      reducedArray.array.push(inputGrid.values[y][x]);
    }
  }    
}

function createKeyListener() {
  $(document).keypress( function(e) {     
    var input = String.fromCharCode(e.which);
         
    if (input === 'w' && snake.direction !== 'down') {
      snake.direction = 'up';
    } else if (input === 's' && snake.direction !== 'up') {
      snake.direction = 'down';
    } else if (input === 'd' && snake.direction !== 'left') {
      snake.direction = 'right';
    } else if (input === 'a' && snake.direction !== 'right') {
      snake.direction = 'left';
    }
     
  }); 
}
function runApp() {
  setInterval(function(){ 
    $( ".snake-board" ).empty();
    //getDirection();
    moveSnake();
    checkSnake();
    addSnakeToGrid();
    createReducedArray();
    outputReducedArray();
    $( ".snake-board" ).append(out.toWindow);
    out.toWindow = '';
    reducedArray.array = []; 
  },snake.speed);
}


$(document).ready( function() { 
  alert('hsss... hsss.... snek is hungry.')
  createKeyListener();
  createInputGrid(); 
  runApp();
})
 
   