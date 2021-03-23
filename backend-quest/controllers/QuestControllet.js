const Player = require('../models/Player')

module.exports = {
    async createPlayer(req, res){

        console.log(req.body)
        const { title, questionLevel, questions } = req.body

        if(!title || !questionLevel || !questions){
            res.status(400).send({ success: false, message: 'Please fill in all fields' })
        }

        }
    }