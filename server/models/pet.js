var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');


const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name should be at least 3 characters!'],
        minlength: 3,
        unique: true,

    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        minlength: 1,
    },

    description: {
        type: String,
        required: [true, 'Desc should be at least 3 characters!'],
        minlength: 3,

    },
    like: {
        type: Number,
        default: 0,
    },

    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },


}, { timestamps: true })


var Pet = mongoose.model('Pet', PetSchema);