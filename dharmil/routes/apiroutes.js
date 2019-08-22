var express = require('express');
var apiController = require('../controllers/insertForm');
var uploadController = require('../controllers/uploadFiles');

var apiRouter = express.Router();


apiRouter.route('/forms')
.post(apiController.insertForm);

apiRouter.route('/upload')
.post(uploadController.uploadFiles);

module.exports = apiRouter;