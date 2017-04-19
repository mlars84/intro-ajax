console.log('test');

$( document ).ready( onReady );

function onReady(){
  $.ajax({
    url: 'http://www.omdbapi.com/?t=i+heart+huckabees',
    success: function(response){
      console.log(response);
      $( '.title' ).append( response.Title );
      $( '.poster' ).append( '<img src="' + response.Poster + '">' );
      $( '.plot' ).append( response.Plot );
      $( '.director' ).append( response.Director );
      $( '.actors' ).append( response.Actors );
      $( '.released' ).append( response.Released );
    }
  });
}
// "<a href=" + response.Website + "></a>"
