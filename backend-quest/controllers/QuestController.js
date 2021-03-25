const Player = require('../models/Player')
const Quest = require('../models/Quest')
const Matter = require('../models/Matter')

module.exports = {
    async createQuest(req, res){

        const { matter, description, correctAlternative, alternatives, level, points} = req.body

        if(
            !matter || 
            !description || 
            !correctAlternative || 
            !alternatives || 
            !level || 
            !points 
        ){
            return res.status(400).send({ success: false, message: 'Please fill in all fields' })
        }

        const queryMatter = await Matter.findById(matter)
        if(!queryMatter || queryMatter.length){
            return res.status(400).send({ success: false, message: 'Máteria não encontrada' })
        }

        else{
            
            
            const newQuest = new Quest({
                matter,
                description, 
                correctAlternative, 
                alternatives, 
                level, 
                points,
                status:"active"
            })
            
            const savedQuest = await newQuest.save()
            
            if(!savedQuest || savedQuest.length === ''){
                return res.status(402).send({ success: false, message: 'error at save quest' })
            }

            const updatedMatter = await Matter.findByIdAndUpdate(matter, {
                $push:{ questions:savedQuest._id }
            }).catch(err => { return res.status(402).send({ success: false, message: 'error on update Matter', err:err }) })

            return res.status(201).send({ success: true, createdQuest: savedQuest, updatedMatter: updatedMatter })
        }
            
    },

    async listQuest(req, res){
        
        const quests = await Quest.find()
        .catch( err => { res.status(400).send({ success: false, message: err }) })
        
        return res.status(201).send({ success: true, quests: quests })
    },

    async listQuestionsByLevel(req, res){
        const { matter, level } = req.body

        if( !matter ||  !level) return res.status(400).send({ success: false, message: 'Please fill in all fields' })
        
        const filtered = await Quest.find({ matter:matter, level: level })
        .populate('matter');

        if(!filtered || filtered.length === 0) return res.status(402).send({ success: false, message: 'matter not found' })
        

        return res.status(201).send({ success: true, quests: filtered });
    },

    async listQuestionsByLevelAndLimit(req, res){
        const { matter, level, questLimit} = req.body

        if( !matter ||  !level || !questLimit) return res.status(400).send({ success: false, message: 'Please fill in all fields' })
        
        const filtered = await Quest.find({ matter:matter, level: level })
        .populate('matter');

        // if(!filtered || filtered.length === 0) return res.status(402).send({ success: false, message: 'matter not found' })
        
        let result = filtered.slice(0,questLimit);
        
        return res.status(201).send({ success: true, quests: result });
    },
    
    async previewAnswerQuestion(req, res){
        const { _id, playerAnswer } = req.body
        if( !_id ||  !playerAnswer) return res.status(400).send({ success: false, message: 'Please fill in all fields' })
        
        let previewAnswer = {
            _id,
            playerAnswer
        }
        let previewArray = []
        previewArray.push(previewAnswer)

        return res.status(201).send({ success: true, preview: previewArray });
    },

    async answerQuestion(req, res){
        const { questId, player, playerOption } = req.body
        if( !questId || !player || !playerOption) return res.status(400).send({ success: false, message: 'Please fill in all fields' })

        const findQuest = await Quest.findById(questId)
        if(!findQuest || findQuest.length === 0) return res.status(400).send({ success: false, message: 'Quest not found' })
        
        const findPlayer = await Player.findById(player)
        if(!findPlayer || findPlayer.length === 0) return res.status(400).send({ success: false, message: 'Player not found' })
        
        let requestPlayerAnswer = {
            player: player,
            playerOption: playerOption
        }

        const updateQuest = await Quest.findByIdAndUpdate(questId, {
            $push:{ playerAnswer: [requestPlayerAnswer]}
        })
        .catch(err => { return res.status(400).send({ success: false, message: 'Error on updateQuest', err:err }) })
        
        if(!updateQuest || updateQuest.length === 0) return res.status(400).send({ success: false, message: 'Error on updateQuest' })

        return res.status(201).send({ success: true, preview: updateQuest });
    }
}