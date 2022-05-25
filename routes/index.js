var clientRoutes = require( './client.js' )
var cmsRoutes = require( './cms.js' )
var routes = require( '../configs/routes' )

function configRouter ( app )
{
    app.use( function ( req, res, next )
    {
        res.locals = {
            route: routes,
        };
        next();
    } );

    app.use( clientRoutes )
    app.use( cmsRoutes )
}

module.exports = configRouter;