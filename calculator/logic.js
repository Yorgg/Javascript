var first_value = '',
    operator_name = '',
    second_value = '';
   
      
$(document).ready(function() {
    $(document).keypress( function(e) {
     	var input = String.fromCharCode(e.which);
    	
    	if (e.which == '13') {
            calculate();
     	} else if (input == '+') {
            operator_name = '+';
            $("#display").html('+');
        } else if (input == '-') {
            operator_name = '-';
            $("#display").html('-');
        } else if (input == '/') {
            operator_name = '/';
            $("#display").html('/');
        } else if (input == '%') {
            operator_name = '%';
            $("#display").html('%');
        } else if (input == 'e') {
            erase();
        } else if (input == '*') {
            operator_name = '*';
            $("#display").html('*');
        } else {
            num(input);
        }
    }); 
});

function erase() {
	first_value = '';
    operator_name = '';
    second_value = '';
    $("#display").text('0');
}

function num(n) {
	if (operator_name == '') { 
	    first_value += '' + n;
	    $("#display").text(first_value);
  	} else {
 		second_value += '' + n; 
 	    $("#display").text(second_value);
 	}
}

function calculate() {
	var calc = (eval(first_value + operator_name + second_value) + '');
	$("#display").text(calc);
	first_value = '';
    operator_name = '';
    second_value = '';
}

  

 