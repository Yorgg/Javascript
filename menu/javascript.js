var home = "<p>Flaming Moe's, is a bar in Springfield that serves the one and only, Flaming Moe.<p> <p>This drink was hand crafted by Moe himself and the recipe remains a secret.</p>"

$(document).ready( function() {
  $( "#title" ).append( "Flaming Moe's" );
  $( "#header-pic" ).append( '<img src="http://static-media.fxx.com/img/FX_Networks_-_FXX/688/495/FlamingMoes.jpg">');
  $( ".content" ).append(home);

  $( "#home" ).append( "Home");
  $( "#menu" ).append( "Menu");
  $( "#contact" ).append( "Contact");
})
 
  $( "#home" ).click(function() {
  	$( ".content" ).empty();
    $( ".content" ).append(home);
  })

  $( "#menu" ).click(function() {
  	$( ".content" ).empty();
    $( ".content" ).append( "<p>Flaming Moe - $4.50, Crab Juice - $2.50<p> " );
  })

  $( "#contact" ).click(function() {
  	$( ".content" ).empty();
    $( ".content" ).append( "<p>address: 345 Evergreen Terrace<p><p>phone number not included, due to prank calls</p>" );
  })


 
 