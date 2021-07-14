const Rider = require('../models/riders.model');

module.exports.createRider = (req,res) => {
    console.log("Inside createRider");
    console.log(req.body);
    Rider.create(req.body)
        .then((newRider) =>{
            console.log(newRider);
            res.json(newRider);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}

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




module.exports.getSingleRider = (req, res) => {
    console.log("Inside getSingleRider");
    Rider.findById(req.params.id)
        .then((singleRider) => {
            console.log(singleRider);
            res.json(singleRider);
        })
        .catch((err) => {
            console.log(err);
            res.json(err);
        });
}


// module.exports.deleteRider = (req,res) =>{
//     console.log("Inside deleteRider");
//     Rider.findByIdAndDelete(req.params.id)
//         .then((deletedRider) =>{
//             console.log(deletedRider);
//             res.json(deletedRider);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json(err);
//         });
// }


// module.exports.updateRider = (req, res) =>{
//     console.log("Inside updateRider");
//     Rider.findByIdAndUpdate(req.params.id, req.body, {
//         new: true,
//         runValidators: true
//     })
//         .then((updatedRider) => {
//             console.log(updatedRider);
//             res.json(updatedRider);
//         })
//         .catch((err) => {
//             console.log(err);
//             res.json(err);
//         })
// }