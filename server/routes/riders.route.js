const RiderController = require("../controllers/riders.controller");

module.exports = function(app) {
        app.post('/api/riders', RiderController.createRider);
        app.get('/api/riders', RiderController.getAllRiders);
        app.get('/api/riders/:id', RiderController.getSingleRider);
        app.delete('/api/riders/:id', RiderController.deleteRider);
        app.put('/api/riders/:id', RiderController.updateRider);


}