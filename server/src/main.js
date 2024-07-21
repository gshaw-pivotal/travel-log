const mongoose = require('mongoose');

const {app} = require("./api/api");

const DATABASE_URL = '<THE_URL_TO_THE_MONGODB>';

mongoose.connect(DATABASE_URL)
    .then(() => console.log("Connected to mongodb"));

var server = app.listen(3000, function () {
    console.log("Server listening on port 3000");
})