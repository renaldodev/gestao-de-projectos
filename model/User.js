const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaUser = new Schema({
    nome:String,
    sobrenome: String,
    email:String,
    data_at: {
        type: Date,
        default: Date.now
    },
    acesso:Number
});

const User = mongoose.model('user', schemaUser);

module.exports = User;