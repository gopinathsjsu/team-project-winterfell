const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
var cors = require('cors');
const cookieParser = require('cookie-parser');
const config = require('./config/config');
const app = express();
const router = require('./app');

if(config.AUTHSOURCE===undefined){
    console.log(config.DBHOST+config.DBNAME);
    mongoose.connect(config.DBHOST+config.DBNAME,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(function(){
        console.log('Connected to local!');
    }).catch(function(error){
        console.log(error);
        console.log('Error while connecting the database');
    });
}else{
    console.log('mongodb://'+config.DBUSER+':'+config.DBPASSWORD+'@'+config.DBHOST+config.DBNAME+'?authSource='+config.AUTHSOURCE)
    mongoose.connect('mongodb://'+config.DBUSER+':'+config.DBPASSWORD+'@'+config.DBHOST+config.DBNAME+'?authSource='+config.AUTHSOURCE,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(function(){
        console.log('Connected!');
    }).catch(function(error){
        console.log(error);
        console.log('Error while connecting the database');
    });   
}

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(cookieParser());

app.use(cors());

app.set("view engine", "ejs");

app.all('/*', function (req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,token');
    if (req.method == 'OPTIONS') {
        res
            .status(200)
            .end();
    } else {
        next();
    }
});

app.use(router);

const listener = app.listen( 3001, function () {
    console.log('Listening on Port ' + listener.address().port);
});
