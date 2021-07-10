const RiderController = require("../controllers/riders.controller");

module.exports = function(app) {

        // app.post('/api/riders', RiderController.createRider);

        app.get('/api/riders', RiderController.getAllRiders);


}