import * as mongoose from 'mongoose';

const ContatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    apelido: {
        type: String,
        required: true,
        unique: true
    },
    telefone: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: {createdAt: true, updatedAt: true}
})

export default mongoose.model('Contatos', ContatoSchema);