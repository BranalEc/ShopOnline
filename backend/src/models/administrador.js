import { Schema, model } from "mongoose";

const administratorSchema = new Schema({
    fullName: {type: String},
    email: {type: String},
    password: {type: String},
    status: {type: Boolean}
},{
    timestamps: true,
    strict: false
});

export default model("Administrator", administratorSchema);