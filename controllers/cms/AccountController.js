const db = require( '../../database/models/index' )
const bcrypt = require( 'bcrypt' );
const routes = require( '../../configs/routes' )

class Controller
{
    async login ( req, res )
    {
        if ( req.method == "POST" )
        {
            const user = await db.User.findOne( { where: { username: req.body.username } } );
            if ( user && bcrypt.compareSync( req.body.password, user.password ) )
            {
                req.session.adminUser = user
                return res.json( {}, 200 )
            }

            return res.json( { message: 'fail' }, 500 )
        }

        res.render( 'cms/login', {
            req, res,
            title: 'Login'
        } )
    }

    async changePassword ( req, res )
    {
        if ( req.method == "POST" )
        {
            const user = await db.User.findOne( { where: { username: req.session?.adminUser?.username || null } } );
            if ( user && bcrypt.compareSync( req.body.old_password, user.password ) )
            {
                await user.update( { password: bcrypt.hashSync( req.body.new_password, bcrypt.genSaltSync( 10 ) ) } );
                return res.json( {}, 200 )
            }

            return res.json( { message: 'fail' }, 500 )
        }

        res.render( 'cms/changePassword', {
            req, res,
            title: 'Change password'
        } )
    }

    async logout ( req, res )
    {
        req.session.destroy();
        return res.redirect( routes.cms_login )
    }
}

module.exports = new Controller