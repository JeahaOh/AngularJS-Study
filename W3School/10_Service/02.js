var http = require( 'http' );
var fs = require( 'fs' );
var app = http.createServer( function( request, response ) {
    var url = request.url;
    if( request.url == '/' ) {
      url = '/02_HttpService.html';
      result = fs.readFileSync( __dirname + url )
    }
    if( request.url == '/favicon.ico' ) {
        response.writeHead( 404 );
        response.end();
        return;
    }
    if( request.url == '/welcome') {
      result = 'Hell The AngularJS';
    }
    response.writeHead( 200 );
    console.log( __dirname + url );
    response.end( result );
});
app.listen( 3000 );