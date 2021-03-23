const mongoose = require('../database/index');

const QuestSchema = new mongoose.Schema({

    title: {
        type: String,
        require: true,
        unique: true,
    },

    questionLevel: {
        type: Number,
        require: true,
        unique: true,
    },

    questions: {
        type: Array,
        require: true,
        enum: [{
            id: Number,
            conteudo: String,
            alternatives: Array,
            correctAlternative: Array,
            player: String,
            points: Number,
        }]
    },

    status: {
        type: String,
        require: false,
    },

    createdAt: {
        type: Date,
        default:Date.now,
    },

    updatedAt: {
        type: Date,
        default:Date.now,
    },

}, {
    timestamps: true,
    versionKey: false
})

const Quest = mongoose.model('Quest', QuestSchema)

module.exports = Quest