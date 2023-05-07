import mongoose from "mongoose";
const {Schema, model} = mongoose;

const listSchema = new Schema({
    _id: Number,
    nameList: String,
    elementItem: elementSchema
})

const elementSchema = new Schema({
    _id: Number,
    elementName: String,
})

const List = mongoose.model("List", listSchema)
export default List;