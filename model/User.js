const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaUser = new Schema({
    nome:String,
    apelido: String,
    email:String,
    password:String,
    acesso:Number,
    data_at: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('user', schemaUser);

module.exports = User;