$( document ).ready(function() {
  $('ul.subnav').prev().prepend( "<a class='expander'>[+]</a>" );
  $('a.expander').parent().next().addClass( 'collapse' );
  
  $('a.expander').on('click', function () {
    $(this).parent().next().toggleClass( 'collapse' );
    if ( $(this).parent().next().hasClass('collapse') ) {
      $(this).html("[+]");
    } else {
      $(this).html("[-]");
    }
  });

  $('a.current').parent().parent().removeClass( 'collapse' );
  $('a.current').parent().parent().parent().removeClass( 'collapse' );
});

