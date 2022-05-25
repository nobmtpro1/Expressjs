const multer = require( 'multer' )

const storage = multer.diskStorage( {
    destination: function ( req, file, cb )
    {
        cb( null, 'public/images' )
    },
    filename: function ( req, file, cb )
    {
        const uniqueSuffix = Date.now() + Math.round( Math.random() * 1E9 )
        cb( null, uniqueSuffix + '.' + file?.originalname?.split( "." )?.reverse()[ 0 ] )
    }
} )

const uploadImage = multer( {
    storage: storage,
    fileFilter: ( req, file, cb ) =>
    {
        if ( file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == 'image/svg+xml' )
        {
            cb( null, true );
        } else
        {
            cb( null, false );
            return cb( 'Only .png, .jpg and .jpeg format allowed!' );
        }
    }
} )

module.exports = {
    uploadImage
}