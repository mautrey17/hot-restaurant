//path package
var path = require("path");


module.exports = function(app) {


    //this is the main page
    app.get("*", function(res) {

        res.sendFile(path.join(__dirname, "../home.html"));

    });

    //user visits the reserve page
    app.get("/reserve", function(res) {

        res.sendFile(path.join(__dirname, "../reserve.html"));

    });

    //user visits the table page
    app.get("/tables", function(res) {

        res.sendFile(path.join(__dirname, "../tables.html"));

    });

    



};