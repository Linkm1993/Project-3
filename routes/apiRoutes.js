const router = require("express").Router();
const db = require("../models")

router.get("/memes", (req,res) => {
    db.MemeTemp.find({})
    .then(memes => res.json(memes))
    .catch(err => res.status(422).end())
})

module.exports = router;