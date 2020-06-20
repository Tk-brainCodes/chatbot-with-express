var express = require("express");
var app = express();
var cors = require("cors")
app.use(cors())

app.use(express.json());
app.get('/', function (req,res) {
    res.send("Hi i am chatbot");
});

app.post("/postMessage", function (req,res) {
    let message = req.body.message.toLowerCase();
    if (message === 'hello') {
        res.send({ "bot_message": "Hi! Hope you are well" })
    } else if (message === 'system issue') {
        res.send({ "bot_message": "Let me see what I can do" })
    } else if (message === 'thanks') {
        res.send({ "bot_message": "You are welcome" })
    } else if (message === "mark"){
        res.send({"bot_message": "Hello Mark Essien"})
    } else if(message === "what is your name"){
        res.send({"bot_message": "MY name is Bot"})
    } else {
        res.send({ "bot_message": "Sorry, I don't understand" })
    }
});

var server = app.listen(3001, function() {});
console.log("Listing to server at 3001");