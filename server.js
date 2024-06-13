
//require express and db and routes
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
// create the port and make the const app
const PORT = process.env.PORT || 3001;
const app = express();

//use express middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);
// open the port and console log the port number 
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`running on port ${PORT}`);
    });
});