//import mongoose from "mongoose";
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const listSchema = new Schema({
    nameList: String,
    //elementName: elementSchema
})

const elementSchema = new Schema({
    elementName: String,
})

const List = mongoose.model("List", listSchema)
export default List;
