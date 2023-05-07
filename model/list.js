import mongoose from "mongoose";
const {Schema, model} = mongoose;

const listSchema = new Schema({
    nameList: String,
    // elementItem: elementSchema
})

const elementSchema = new Schema({
    elementName: String,
})

const List = mongoose.model("List", listSchema)
export default List;