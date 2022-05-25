const { User } = require( '../../database/models/index' )

class Controller
{
    async index ( req, res )
    {
        const user = await User.findAll();

        res.render( 'cms/dashboard', {
            req, res,
            title: 'Dashboard',
            user
        } )
    }
}

module.exports = new Controller