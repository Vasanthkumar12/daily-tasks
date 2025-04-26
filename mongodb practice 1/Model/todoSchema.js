import mongoose from "mongoose";

const todos = new mongoose.Schema({
    task: {type: String},
    priority: {type: String},
    status: {type: String}
})

export const todoDetails = mongoose.model("todo", todos)