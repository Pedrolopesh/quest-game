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
        console.log(req.body)
        const { matter, level} = req.body

        if( !matter ||  !level) return res.status(400).send({ success: false, message: 'Please fill in all fields' })

        const filtered = await Quest.find({ matter:matter, level: level })
        .populate('matter');

        return res.status(201).send({ success: true, quests: filtered });
    }
}