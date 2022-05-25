const routes = require( "../configs/routes" );

function authCms ( req, res, next )
{
    // if ( req.session.adminUser )
    // {
        next()
    // } else
    // {
    //     res.redirect( routes.cms_login );
    // }
}

module.exports = authCms