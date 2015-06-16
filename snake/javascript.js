var grid = [];

//create empty 20x20 multidimensional grid  
function creategrid() {
  var newGrid = new Array(10);
  for (var y = 0; y < 10; y++) {
    newGrid[y] = [ 0, 0, 0, 0, 0,
                   0, 0, 0, 0, 0, 
                   0, 0, 0, 0, 0,
                   0, 0, 0, 0, 0 ];
  }
  grid = newGrid;
}

//snake object with initial location on grid and direction
var snake = {
  location: [[2,9],[1,9],[0,9]],  
  speed: 110,  
  direction: 'left',
  collision: false,
  score: 0
}

//look at current snake direction and move snake
function moveSnake() {
  switch (snake.direction) {
  case 'down':
    moveSnakeInDirection(1,0);
    break;
  case 'up':
    moveSnakeInDirection(-1,0);
    break;
  case 'left':
    moveSnakeInDirection(0,-1);
    break;
  case 'right':
    moveSnakeInDirection(0,1);
    break;
  }
}

//for each coordinate of snake, add it to the main grid
function addSnakeToGrid() {
  for (var b = 0; b < snake.location.length; b++) {
    grid[snake.location[b][0]][snake.location[b][1]] = 'S';
  }  
}

//check if the snake is outside boundry
function checkBoundry(y,x) {
  if (snake.location[0][0]+y > 9 || snake.location[0][1]+x > 9) {
    return (true);
  } else if (snake.location[0][0]+y < 0 || snake.location[0][1]+x < 0) {
    return (true);
  }
}

function moveSnakeInDirection(y, x) {
  var yAxis = snake.location[0][0] + y;
  var xAxis = snake.location[0][1] + x;

  //check for boundry collision
  if (checkBoundry(y, x)) {
    snake.collision = true;
    return;
  }

  //check for snake collision 
  if (grid[yAxis][xAxis] === 'S'){
    snake.collision = true;
    return;
  }

  //move the head of snake
  snake.location.unshift([(yAxis), xAxis]);

  //if no fly eaten, grid = 0 where snake tail was.
  if (grid[yAxis][xAxis] !== 'F') {
    var tail = snake.location.slice(-1)[0];
    grid[tail[0]][tail[1]] = 0;
    snake.location.pop(); //and remove tail from snake
  } else {
    addFlyToGrid(); 
    snake.score += 10
  }
}

function addFlyToGrid() {
  
  //convert grid coordinates to numbers => [0,1,2,3,4,5..99]
  // TO DO: move this elsewhere so it exists in a single place memory
  var gridSquares = Array.apply(null, {length: 100}).map(Number.call, Number)

  //convert the snakes coordinates to a number and map.
  var snakeLocations = _.map(snake.location, function(num){ return ((num[0]*10)+(num[1])); })

  //create list of all possible locations the fly can respawn 
  var possibleFlyLocations = _.difference(gridSquares, snakeLocations);

  //generate random index number for possibleFlyLocations
  var randomIndex = Math.floor((Math.random() * (possibleFlyLocations.length-1)-0) + 0);
  
  //choose a value from possibleFlyLocations
  var nextFlyCoordinate = possibleFlyLocations[randomIndex]
  
  //convert this back to grid coordinates and update grid with fly location
  yFly = Math.floor(nextFlyCoordinate/10)
  xFly = nextFlyCoordinate%10
  grid[yFly][xFly] = 'F'
}

//Compress grid (to a one dimensional array) for appending
var compressedGrid = {
  array: []
}

//String to be appended to HTML
var out = {
  toHTML: ''
}
 
//parse compressedGrid  
function outputcompressedGrid() {
  for (var square = 0; square < 100; square++) {
    if (compressedGrid.array[square] === 0) {
      out.toHTML += '<div class="square"></div>';
    } else if (compressedGrid.array[square] === 'F') {
      out.toHTML += '<div class="square fly"></div>';
    } else if (compressedGrid.array[square] === 'S') {
      out.toHTML += '<div class="square snake"></div>';
    }
  }  
}

//iterate over grid and populate compressedGrid
function createcompressedGrid() {
  for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 10; x++) {
      compressedGrid.array.push(grid[y][x]);
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

function checkWin() {
  if (snake.location.length === 100) {
    return 'winner';
  }
}

function runApp() {
  var display = $( ".snake-board" )
  creategrid();
  addFlyToGrid();

  setInterval(function(){ 
    //reset board
    display.empty();
    out.toHTML = '';
    compressedGrid.array = []; 
     
    //move snake and check for collision  
    moveSnake();
    if (snake.collision) {
      display.append('game over <br>');
      display.append('your score: ' + snake.score)
      return;
    }

    addSnakeToGrid();

    if (checkWin() === 'winner'){
      display.append('<p>You are winner! </p>');
      display.append('<p>Your score: ' + snake.score + '</p>');
      return;
    }

    createcompressedGrid();
    outputcompressedGrid();
    display.append('<p class="score">  ' + snake.score + '</p>')
    display.append(out.toHTML); //append grid to html file
  }, snake.speed);
}

$(document).ready( function() {
  createKeyListener();
  runApp();
})
 
   