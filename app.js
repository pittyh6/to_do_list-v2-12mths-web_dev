//jshint esversion:6

//import mongoose from 'mongoose';
//import List from './model/list.js';
const http = require('http');
const fs = require('fs')
const handlebars = require('handlebars');
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/todolistDB", { useNewUrlParser: true, useUnifiedTopology: true })
//const List = require('./model/list.js');
//const List = require('./model/list.js')
const template = handlebars.compile(fs.readFileSync('index.html', 'utf8'));
//const html = template({ lists: list });

//import * as http from 'http'
//import * as fs from 'fs';

http.createServer(function (req, res) {
    if (req.url === '/') {
        console.log("Entrooouuuuuuuuuu")
        List.find({}, function (err, lists) {
            if (err) return console.error(err);
            const template = handlebars.compile(fs.readFileSync('index.html', 'utf8'));
            const html = template({ lists: lists });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(html);
        });
    } else {
        console.log("Saiuuuuuuuuuuuuuu")
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
}).listen(3001);





const { Schema, model } = mongoose;

const listSchema = new Schema({
    nameList: String,
    //elementName: elementSchema
})

const elementSchema = new Schema({
    elementName: String,
})

const List = mongoose.model("List", listSchema)






//creating a new list 
/*
const newList = new List({
    nameList: 'To Do List',
    elementItem: "Work"
})
newList.save()
*/


//read
/*
//get the whole element
List.find().then((lists) => {
    console.log(lists);
})
//get only the nameList field
const nameListOnDB = List.find().select({ nameList: 1, _id: 0 })
console.log(nameListOnDB)*/





/*
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
    console.log('listening on port 3002')
})*/