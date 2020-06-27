const router = require("express").Router();
const db = require("../models")
const axios = require("axios")

router.get("/memes", (req,res) => {
    db.MemeTemp.find({})
    .then(memes => res.json(memes))
    .catch(err => res.status(422).end())
})

router.post("/imgur",(request,response) => {
    let clientId = "546c25a59c58ad7";
    let data = {
        image: 'https://www.serebii.net/Shiny/SM/025.png',
        type: "url",
        name: "TestPika.png"
    };
    axios.post('https://api.imgur.com/3/upload', {
        headers: { 
            'Authorization' : 'Client-ID ' + clientId,
        },
        body: data
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });
})

module.exports = router;