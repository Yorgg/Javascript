//
//
$( document ).ready(function() {  
  
  //throw error it's not a num, or if num > 1.3 million
  function checkError(n){
    if ( !(n).match(/\d+/) || (n > 1300000) )  {
  	  console.log('error, not number!')
  	  $('input').val('').focus();
  	  $('#input').effect('shake');
  	  throw 'not number'
  	};   
  }
  
  $("#submit").on( "click", function() {
  	var input = $('input').val(), 
  	    roman = R(input);
  	checkError(input);
    $("ul").prepend('<li>' + roman +'<num>' + input + '</num>' + '</li>');
    $("ul li:first").effect("highlight", {color: '#C7F464'}, 1000);

    $('input').val('').focus();
  });
  
  $("#input").keyup(function(event){
    if(event.keyCode == 13 && $('input').val() !== ''){
      checkError($('input').val());
      $("#submit").click();
    }
  }); 
});


 