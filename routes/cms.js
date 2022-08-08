var express = require( 'express' );
var DashboardController = require( '../controllers/cms/DashboardController' );
var TicketController = require( '../controllers/cms/TicketController' );
var AccountController = require( '../controllers/cms/AccountController' );
var router = express.Router();
var { cms_login, cms_logout, cms_change_password, cms_dashboard, cms_ticket, cms_ticket_add, cms_ticket_edit, cms_ticket_delete } = require( '../configs/routes' )
var authCms = require( '../middlewares/authCms' )
const multer = require( 'multer' )



router.all( cms_login, AccountController.login )
router.get( cms_logout, AccountController.logout )
router.all( cms_change_password, authCms, AccountController.changePassword )

router.get( cms_dashboard, authCms, DashboardController.index )

router.get( cms_ticket, authCms, TicketController.index )
router.all( cms_ticket_add, authCms,  TicketController.add )
router.all( cms_ticket_edit, authCms,  TicketController.edit )
router.post( cms_ticket_delete, authCms, TicketController.delete )

module.exports = router