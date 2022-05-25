
class Controller
{
    index ( req, res )
    {
        res.render( 'client/livestreamDetail', {
            req, res
        } )
    }
}

module.exports = new Controller