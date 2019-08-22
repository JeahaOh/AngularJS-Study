var http = require( 'http' );
var fs = require( 'fs' );
var app = http.createServer( function( request, response ) {
    var url = request.url;
    if( request.url == '/01' ) {
      url = '/01_DisplayTable.html';
      result = fs.readFileSync( __dirname + url );
    } else if( request.url == '/02' ) {
      url = '/02_OrderBy.html';
      result = fs.readFileSync( __dirname + url );
    } else if (request.url == '/03') {
      url = '/03_Uppercase.html';
      result = fs.readFileSync( __dirname + url );
    } else if (request.url == '/04') {
      url = '/04_Index.html';
      result = fs.readFileSync( __dirname + url );
    } else if (request.url == '/05') {
      url = '/05_EvenOdd.html';
      result = fs.readFileSync( __dirname + url );
    } else if (request.url == '/customers') {
      url = '/customers.json';
      result = fs.readFileSync( __dirname + url );
    } else if( request.url == '/welcome') {
      result = 'Hell The AngularJS';
    } else {
      response.writeHead( 404 );
      response.end(  );
      return;
    }
    response.writeHead( 200 );
    console.log( __dirname + url );
    response.end( result );
});
app.listen( 3000 );

