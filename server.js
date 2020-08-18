const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const app = express() ;

app.use(bodyParser.json()) ;

const db = require('./config/keys').mongoURI ;

mongoose.
    connect(db)
    .then(() => console.log("Successfully connected"))
    .catch(err => console.log("connecction error" ,err));

app.use('/api/items',items);

const port = process.env.PORT  || 5000 ;
app.listen(port, () => console.log(`Server started at port  ${port}` ));


