<template>
  <div>

    <div v-for="(questionItem,index) in questions" :key="index">
        <div class="container-form ac mt-15">
            <h3>{{ questionItem.description }}</h3>
            <div class="d-flex" v-for="(alternativeItens,i) in questionItem.alternatives" :key="i">

            <v-checkbox
                @click="select(questionItem, alternativeItens, index)"
                :label="alternativeItens.option+` ) `+ alternativeItens.text"
                :disabled="selectedPlayerAnswer[index] === index ? true : false"
            ></v-checkbox>

            </div>
        </div>
    </div>

    <div align="center">
        <v-btn v-if="currentStep !== 3" dark color="purple" class="mb-10 mt-10" @click="nextStep()">Proxima Fase</v-btn>
        <v-btn v-else dark color="purple" class="mb-10 mt-10" @click="finishGame()">Finalizar Jogo</v-btn>
    </div>

  </div>
</template>

<script>
export default {
    data:() => ({
        localPlayer: JSON.parse(localStorage.getItem('player')),
        selectMatter: JSON.parse(localStorage.getItem('selectedMatter')),
        selectedPlayerAnswer:[],
        questions:'',
        disabledCheckBox: false,
        selectQuest:[],
        currentStep:1
    }),
    created(){
        this.getAndSetStep()
        this.requestForQuestions()
    },
    methods:{
        getAndSetStep(){
            const savedStep = JSON.parse(localStorage.getItem('stepQuestionForm'))
            if(!savedStep) this.currentStep = 1
            else this.currentStep = savedStep
        },

        async requestForQuestions(){
            let body = { matter:this.selectMatter._id, level:this.currentStep, questLimit:3 }
            const mattersResponse = await this.$http.post(this.$url + '/listByLevelAndLimit/question', body)
            this.questions = mattersResponse.data.quests
        },

        async select(selectedAlternativeParam, selectedAnswer, index){

            let previewAnswer = {
                correctAnswer: selectedAlternativeParam.correctAlternative,
                playerOption: selectedAnswer.option,
                points: selectedAlternativeParam.points,
                player: this.localPlayer.player
            }


            this.selectQuest.push(previewAnswer)
            this.selectedPlayerAnswer.push(index)
    
        },

      async nextStep(){

        if(this.currentStep === 1) localStorage.setItem('answeredForm1', JSON.stringify(this.selectQuest));
        if(this.currentStep === 2) localStorage.setItem('answeredForm2', JSON.stringify(this.selectQuest));
        this.currentStep = this.currentStep+1
        await this.requestForQuestions(this.currentStep)
        localStorage.setItem('stepQuestionForm', this.currentStep);
        location.reload();

        // if(answeredForm) this.selectQuest.push(answeredForm)
        // else localStorage.setItem('answeredForm',JSON.stringify(this.selectQuest));
      },

      async finishGame(){
        if(this.currentStep === 3) localStorage.setItem('answeredForm3', JSON.stringify(this.selectQuest));

        const answeredForm1 = JSON.parse(localStorage.getItem('answeredForm1'))
        const answeredForm2 = JSON.parse(localStorage.getItem('answeredForm2'))
        const answeredForm3 = JSON.parse(localStorage.getItem('answeredForm3'))

        let body = {
            firstForm:answeredForm1,
            secondForm: answeredForm2,
            thierdForm: answeredForm3,
            playerId: this.localPlayer.player._id
        }
        const requestFinishGame = await this.$http.post(this.$url + '/answer/calculate', body)
        if(!requestFinishGame.data || requestFinishGame.status !== 200) console.log(requestFinishGame)
        else{
            localStorage.setItem('totalPoints', JSON.stringify(requestFinishGame.data.totalPoint));
            this.$vs.notification({ duration: 9000, progress: 'auto', color:'success', title: 'Parabéns, o jogo acabou', position:'top-center'})
            this.$router.push('/FinalStep')
        }
      }
    }
}
</script>

<style>

</style>