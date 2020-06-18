const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/memeImages"
);

const memeSeed = [
    {
        title: "Modern Problems",
        image: "../images/modenProblems.jpg"
    },
    {
        title: "SpongeBob Mocking",
        image: "../images/mockingSpongeBob.jpg"
    },
    {
        title: "Surprised Pikachu",
        image: "../images/surprisedPika.jpg"
    }
];

db.MemeTemp.remove({})
    .then(() => db.MemeTemp.collection.insertMany(memeSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!!!");
        process.exit(0)
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });