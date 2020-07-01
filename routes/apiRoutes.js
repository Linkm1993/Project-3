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
    db.MemeTemp.create({
        title: 'Hello',

        image: req.body.image

    })
    .then(console.log())
    .catch(err => res.status(422).end())
});

module.exports = router;
