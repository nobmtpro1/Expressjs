var createError = require( 'http-errors' );
var express = require( 'express' );
var path = require( 'path' );
var cookieParser = require( 'cookie-parser' );
var logger = require( 'morgan' );
const configRouter = require( './routes/index' );
var session = require('express-session');
var app = express();
require( 'dotenv' ).config()


// view engine setup
app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'ejs' );
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { secure: false , maxAge: oneDay },
    resave: false 
}));
app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( cookieParser() );
app.use( express.static( path.join( __dirname, 'public' ) ) );

configRouter( app )

// catch 404 and forward to error handler
app.use( function ( req, res, next )
{
  next( createError( 404 ) );
} );

// error handler
app.use( function ( err, req, res, next )
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get( 'env' ) === 'development' ? err : {};

  // render the error page
  res.status( err.status || 500 );
  res.render( 'error' );
} );

module.exports = app;
