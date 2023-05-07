//jshint esversion:6

const mongoose = require('mongoose');
import List from './model/list';
mongoose.connect("mongodb://127.0.0.1:27017/todolistDB", {useNewUrlParser: true})

//creating a new list 



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