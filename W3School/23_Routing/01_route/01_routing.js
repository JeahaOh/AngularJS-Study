var http = require( 'http' );
var fs = require( 'fs' );
var app = http.createServer( function( request, response ) {
    var url = request.url;
    if( request.url == '/' ) {
      url = '/01_Routing.html';
      result = fs.readFileSync( __dirname + url );

    } else if( request.url == '/main.html' ) {
      url = '/01_Main.html';
      result = fs.readFileSync( __dirname + url );

    } else if( request.url == '/red.html' ) {
      url = '/01_Red.html';
      result = fs.readFileSync( __dirname + url );
    
    } else if( request.url == '/blue.html' ) {
      url = '/01_Blue.html';
      result = fs.readFileSync( __dirname + url );
    
    } else if( request.url == '/green.html' ) {
      url = '/01_Green.html';
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

