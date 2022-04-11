const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./routes/df-routes')(app);

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1> <h3>Hello, Alijon!</h3> <h1>This is the basic set up of the express server</h1><p>This is a sample HTML element input sent</p>');
})

app.listen('3030', () => {
    console.log("server is set up and is listening to port 3030");
})

