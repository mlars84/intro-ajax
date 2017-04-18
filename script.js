console.log('test');

$( document ).ready( onReady );

function onReady(){
  $.ajax({
    url: 'http://www.omdbapi.com/?t=i+heart+huckabees',
    success: function(response){
      console.log(response);
      $('.title').append(response.Title);
      $( '.container' ).append( '<img src="'+ response.Poster +'">');
      $('.plot').append(response.Plot);
    }
  });
}
