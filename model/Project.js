const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemaProject = new Schema({
    autores: [],
    titulo: String,
    data_pub: {
        type: Date,
        default: Date.now
    },
    assunto: String,
    area_conhecimento: String,
    tipo_documento: String,
    acesso: String,
    ficheiro: String
});

const Project = mongoose.model('projecto', schemaProject);

module.exports = Project;