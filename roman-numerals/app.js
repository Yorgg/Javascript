//
//
$( document ).ready(function() {  

  $("#submit").on( "click", function() {
  	var input = $('input').val(), 
  	    roman = R$(input);
    $("ul").prepend('<li>' + roman +'<num>' + input + '</num>' + '</li>');
    $('input').val('').focus();
  });

  $("#input").keyup(function(event){
    if(event.keyCode == 13 && $('input').val() !== ''){
      $("#submit").click();
    }
  }); 
});


 