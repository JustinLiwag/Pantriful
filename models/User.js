const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email:{
        type: String,
        required: true,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        required: true,
        minlength: 5
    },
    name:{
        type: String,
        required: true,
        maxlength: 100
    },
    lastName:{
        type: String,
        required: true,
        maxlength: 100
    },
    history:{
        type: Array,
        default: []
    },
    role:{
        type: Number,
        default: 0
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("users", UserSchema);
