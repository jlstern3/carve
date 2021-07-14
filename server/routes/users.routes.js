const UserController = require('../controllers/users.controllers');

module.exports = function (app) {
    app.post("api/users/register", Usercontroller.register);
}