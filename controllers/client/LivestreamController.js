
class Controller
{
    index ( req, res )
    {
        res.render( 'client/livestream', {
            req, res
        } )
    }
}

module.exports = new Controller