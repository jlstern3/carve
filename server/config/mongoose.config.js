const mongoose = require ('mongoose');
const dbName = "riders_db";

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`Established connect to the "${dbName}" database`))
    .catch(err => console.log(`Error establishing "${dbName}" connection`, err));  