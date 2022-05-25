const { Ticket } = require( '../../database/models/index' )
const Joi = require( 'joi' );
const { uploadImage } = require( '../../configs/multer' );
const fs = require( 'fs' );

class Controller
{
    async index ( req, res )
    {
        const tickets = await Ticket.findAll();

        res.render( 'cms/ticket/index', {
            req, res,
            title: 'Ticket',
            tickets
        } )
    }

    async add ( req, res )
    {
        if ( req.method == "POST" )
        {
            uploadImage.single( 'image' )( req, res, async function ( err )
            {
                if ( err )
                {
                    return res.status( 400 ).json( err )
                }
                console.log( req.file )

                const schema = Joi.object( {
                    type: Joi.number().required(),
                    name: Joi.string().required(),
                    date: Joi.string().required(),
                } ).unknown()

                try
                {
                    await schema.validateAsync( req.body );
                }
                catch ( err )
                {
                    fs.unlink( 'public/images/' + req.file.filename, function ()
                    {

                    } );
                    return res.status( 400 ).json( err.details[ 0 ].message )
                }

                await Ticket.create( {
                    type: req.body.type,
                    image: req.file.filename,
                    name: req.body.name,
                    date: req.body.date,
                    from: req.body.from || null,
                    to: req.body.to || null,
                    quantity: req.body.quantity,
                    address: req.body.address,
                    price: req.body.price,
                    link_video: req.body.link_video,
                    is_active: req.body.is_active,
                    overview: req.body.overview,
                } );

                return res.status( 200 ).json( {} )
            } )

            return
        }

        res.render( 'cms/ticket/add', {
            req, res,
            title: 'Ticket',
        } )
    }

    async edit ( req, res )
    {
        var ticket = await Ticket.findOne( { where: { id: req.params.id } } )

        if ( req.method == "POST" )
        {
            uploadImage.single( 'image' )( req, res, async function ( err )
            {
                if ( err )
                {
                    return res.status( 400 ).json( err )
                }

                const schema = Joi.object( {
                    type: Joi.number().required(),
                    name: Joi.string().required(),
                    date: Joi.string().required(),
                } ).unknown()

                try
                {
                    await schema.validateAsync( req.body );
                }
                catch ( err )
                {
                    fs.unlink( 'public/images/' + req.file.filename, function ()
                    {

                    } );
                    return res.status( 400 ).json( err.details[ 0 ].message )
                }

                await Ticket.update( {
                    type: req.body.type,
                    image: req?.file?.filename || ticket?.image,
                    name: req.body.name,
                    date: req.body.date,
                    from: req.body.from || null,
                    to: req.body.to || null,
                    quantity: req.body.quantity,
                    address: req.body.address,
                    price: req.body.price,
                    link_video: req.body.link_video,
                    is_active: req.body.is_active,
                    overview: req.body.overview,
                }, {
                    where: {
                        id: req.params.id
                    }
                } );

                return res.status( 200 ).json( {} )
            } )

            return
        }

        res.render( 'cms/ticket/edit', {
            req, res,
            title: 'Ticket',
            ticket
        } )
    }

    async delete ( req, res )
    {
        var ticket = await Ticket.findOne( { where: { id: req.body.id } } )
        await ticket.destroy()

        return res.status( 200 ).json( {} )
    }
}

module.exports = new Controller