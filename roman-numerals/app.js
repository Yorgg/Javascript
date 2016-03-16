$( document ).ready(function() {  
  /* Set submitted to false */
  var submitted = false;

  $("#submit").on( "click", function() {

  	/* set it to true, to avoid keyup from being called if the user 
  	   hits enter on the submit button */
  	submitted = true;
  	var input = $('input').val();
  	var conversion = R$(input);
    $("ul").prepend("<li>" + conversion + '<number>'+input+'</number>' +"</li>");
    $('input').val('').focus();
  });

  $("#input").keyup(function(event){

    if(event.keyCode == 13 && submitted === false){
      $("#submit").click();
    }

    //reset//
    click = false;
  }); 
});
