//Imports
var express = require('express');
var usersCtrl = require('./routes/usersCtrl');

//Routes
exports.router = (function() {
    var apiRouter = express.Router();

    // Users routes
    apiRouter.route('/users/register/').post(usersCtrl.register);
    apiRouter.route('/users/login/').post(usersCtrl.login);
    apiRouter.route('/users/all/').get(usersCtrl.getAllUsers);
    apiRouter.route('/users/profile/').get(usersCtrl.getUserProfile);
    apiRouter.route('/users/update/').post(usersCtrl.updateUserProfile);
    apiRouter.route('/users/del/:id').post(usersCtrl.deleteUserProfile);

    return apiRouter;
})();