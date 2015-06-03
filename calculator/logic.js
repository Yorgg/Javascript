var first_value = '',
    operator_name = '',
    second_value = '',
    current_display = 0;
      

function erase() {
	first_value = '';
    operator_name = '';
    second_value = '';''
    $("#display").text(0);
}

function operator(name) {
	if (first_value != '') {
	    operator_name = name;
	}
}

function num(n) {
	if (operator_name == '' && first_value.length < 8) { 
	    first_value += '' + n;
	    $("#display").text(first_value);
 	} else {
 		second_value += '' + n; 
 	    $("#display").text(second_value);
 	}
}

function calculate() {
	window[operator_name]();
	first_value = '';
    operator_name = '';
    second_value = '';''
}

function add() {
    $("#display").text(parseInt(first_value) + parseInt(second_value));   
}

function showarray() {
	console.log(array);
}

 