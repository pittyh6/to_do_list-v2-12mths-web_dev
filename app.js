//jshint esversion:6

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.get("/:customListName", function(req, res){
    console.log(req.params.customListName)
})

app.listen(3000, function(){
    console.log('listening on port 3000')
})