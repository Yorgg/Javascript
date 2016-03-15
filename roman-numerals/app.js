$( document ).ready(function() {
  // Handler for .ready() called.
 
  $("#submit").on( "click", function() {
  	var input = $('input').val();
  	var conversion = R$(input);
    $("ul").prepend("<li>" + conversion + '<number>'+input+'</number>' +"</li>");
    $('input').val('').focus();
  });

  $("input").keyup(function(event){
    if(event.keyCode == 13){
        $("#submit").click();
    }
  });

});
