const router = require("express").Router();
const db = require("../models")
const axios = require("axios")
const assert = require('assert');
const fs = require('fs');
const mongodb = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'memeImages';

const client = new mongodb.MongoClient(uri);




router.get("/memes", (req,res) => {
    db.MemeTemp.find({})
    .then(memes => res.json(memes))
    .catch(err => res.status(422).end())
})

router.post("/insert",(req,res) => {

    client.connect(function(error) {
    assert.ifError(error);

    const db = client.db(dbName);

    var bucket = new mongodb.GridFSBucket(db);

    fs.createReadStream('./public/images/surprisedPika.jpg').
        pipe(bucket.openUploadStream('surprisedPika.jpg')).
        on('error', function(error) {
        assert.ifError(error);
        }).
        on('finish', function() {
        console.log('done!');
        process.exit(0);
        });
});




    // let clientId = "d3579318805c16f";
    // let data = {
    //     image: 'https://www.serebii.net/Shiny/SM/025.png',
    //     type: "url",
    //     name: "TestPika.png"
    // };
    // axios.post('https://api.imgur.com/3/upload', {
    //     headers: { 
    //         'Authorization' : 'Client-ID ' + clientId,
    //     },
    //     body: data
    // }).then(function(response) {
    //     console.log(response);
    // }).catch(function(error) {
    //     console.log(error);
    // });
})

module.exports = router;