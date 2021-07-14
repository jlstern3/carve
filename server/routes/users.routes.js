const UserController = require('../controllers/users.controllers');

module.exports = function (app) {
    app.post("/api/users/register", UserController.register);
    app.post("/api/users/login", UserController.login);
}