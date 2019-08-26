var http = require( 'http' );
var fs = require( 'fs' );
var app = http.createServer( function( request, response ) {
    var url = request.url;
    if( request.url == '/' ) {
      url = '/provider.html';
      result = fs.readFileSync( __dirname + url );

    } else if( request.url == '/main' ) {
      url = '/main.html';
      result = fs.readFileSync( __dirname + url );

    } else if( request.url == '/london' ) {
      url = '/london.html';
      result = fs.readFileSync( __dirname + url );
    
    } else if( request.url == '/paris' ) {
      url = '/paris.html';
      result = fs.readFileSync( __dirname + url );
    
    } else if( request.url == '/welcome') {
      result = 'Hell The AngularJS';
    } else {
      response.writeHead( '404' );
      response.end( '404' );
      return;
    }
    response.writeHead( 200 );
    console.log( __dirname + url );
    response.end( result );
});
app.listen( 3000 );

