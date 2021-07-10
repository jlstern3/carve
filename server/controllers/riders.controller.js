const Rider = require('../models/riders.model');

// module.exports.createRider = (req,res) => {
//     console.log("Inside createRider");
//     console.log(req.body);
//     Rider.create(req.body)
//         .then((newRider) =>{
//             console.log(newRider);
//             res.json(newRider);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json(err);
//         });
// }

module.exports.getAllRiders = (req, res) => {
    console.log("inside getAllRiders");
    Rider.find({})
        .then((allRiders) => {
            console.log(allRiders);
            res.json(allRiders);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}
