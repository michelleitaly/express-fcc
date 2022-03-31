require('dotenv').config()
var express = require("express");
var app = express();
app.use((req, res, next)=>{
  console.log(req.method + " " + req.path + " - " + req.ip )
  next();
})
//process.env.MESSAGE_STYLE = "uppercase";
//console.log("Hello World");
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
  
console.log(process.env.MESSAGE_STYLE);
  if (process.env.MESSAGE_STYLE === "uppercase") {
    
    res.json({ message:"Hello json".toUpperCase() });
  } else {
    res.json({ message: "Hello json" });
  }
});
module.exports = app;
