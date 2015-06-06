var array = [];
     
//Checks if 'enter' and 'backspace' keys are pressed
$(document).keydown( function(e) { 
    if (e.which == '13') {
        calculate();
    } else if (e.which == 8 || e.which == 46) {
        popIt();
        return false;
    }
}); 

$(document).keypress( function(e) {   	
    var input = String.fromCharCode(e.which);
         
    if (input == 'c') {
        erase();
    } else if (e.which != 8 && e.which != 13)  {
        pushIt(input);
    }
}); 
 
 
function erase() {
	array = [];
    $("#display").text('0');
}

function pushIt(n) {
	array.push(n) 
    $("#display").text(array.join(''));
}

function popIt(n){
	array.pop()
    $("#display").text(array.join(''));
}

function calculate() {
    try {
        eval(array.join('')); 
    }
    catch(e) {
        $("#display").text('error');
    }

   $("#display").text(eval(array.join('')));
    array = [];
}
