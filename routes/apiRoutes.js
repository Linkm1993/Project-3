const router = require("express").Router();
const db = require("../models")
const axios = require("axios")

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