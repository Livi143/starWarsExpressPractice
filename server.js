// go back, redo from 6:50, express CRUD issues (characters not posting)
// https://www.youtube.com/watch?v=ygk-kNstqK0
// Dependencies 
// =====================
var express = require("express");
var app = express();
var PORT = 3000;

// Data (objects)
// ===================

var characters = [
    {
        name: "yoda",
        role: "jedi master",
        age: 900,
        forcePoints: 50000
    },
    {
        name: "darthmaul",
        role: "sith lord",
        age: 200,
        forcePoints: 20000
    },
    {
        name: "obiwan",
        role: "mentor",
        age: 100,
        forcePoints: 7000
    }
];

// ROUTES 
// ===================
app.get("/", function (req, res) {
    res.send("welcome to the star wars page");
}); // when you go to homepage, display this msg

app.get("/:characters", function (req, res) {
    var chosen = req.params.characters;
    console.log("chosen");
    
    for (var i=0; i<characters.length; i++){
        if (chosen===characters[i].routeName){
            res.json(characters[i]);
            return;
        }
    }
    res.end();
});

// app.get("/yoda", function (req, res) {
//     res.json(yoda);
// }); // when you go to yoda's page, display yoda var in json format
// app.get("/darthmaul", function (req, res) {
//     res.json(darthmaul);
// }); // when you go to yoda's page, display darthmaul var in json format
// app.get("/obiwan", function (req, res) {
//     res.json(obiwan);
// });

// dynamic route: 
// LISTENER (you must have the server listening!)
// ========================
app.listen(PORT, function () {
    console.log("app listening on PORT " + PORT);
});