var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Kullanici = require('./models/kullanici');


var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/bookstore';



mongoose.connect('mongodb://localhost:27017/bookstore', { useMongoClient: true });

var db = mongoose.connection;

app.get('/', function (req, res) {
    res.send('MongoDB ve Node JS ile rest servis yapılan yer');
});

app.get('/api/kullanici', function (req, res) {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        //Find all documents in the customers collection:
        db.collection("kullanici").find({}).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});
app.get('/api/kullanici/:_kAdi/:_sifre', function (req, res) {

    console.log( req.params._kAdi);
    console.log( req.params._sifre);
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        //Find all documents in the customers collection:
        db.collection("kullanici").findOne({kAdi:req.params._kAdi,sifre:req.params._sifre}, function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});


app.listen(3000);
console.log('Running on port 3000');