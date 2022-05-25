var express = require( 'express' );
const HomeController = require( '../controllers/client/HomeController' );
const LivestreamController = require( '../controllers/client/LivestreamController' );
const LivestreamDetailController = require( '../controllers/client/LivestreamDetailController' );
var router = express.Router();
const { home, livestream, livestream_detail, calculate, checkout, cancel_order, pay } = require( '../configs/routes' )

router.get( home, HomeController.index )
router.post( calculate, HomeController.calculate )
router.post( checkout, HomeController.checkout )
router.get( cancel_order, HomeController.cancelOrder )
router.post( pay, HomeController.pay )
router.get( livestream, LivestreamController.index )
router.get( livestream_detail, LivestreamDetailController.index )

router.get( '/test', HomeController.test )

module.exports = router