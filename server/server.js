const express = require ('express');
const app = express();
const cors = require ('cors');
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

require('./config/mongoose.config');
require('./routes/riders.route')(app);
require('./routes/users.routes')(app);

app.listen(port, () => {
    console.log(`Server is actively listening on Port ${port}`)
});