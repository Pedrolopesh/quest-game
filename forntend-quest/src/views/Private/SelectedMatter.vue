<template>
  <div>
      <AppBar />


        <div v-for="(item,i) in questions" :key="i">
            <QuestionForm :itens="item" :confirmQuestion="confirmQuestionDatas" @checkOutAnswer="checkAnswer"/>
        </div>

        <div align="center">
          <v-btn dark color="purple" @click="nextStep()">Proxima Fase</v-btn>
        </div>

        <v-dialog v-model="dialogConfirmAnswer" max-width="600">
          <v-card class="card-modal">

                <v-toolbar dark color="purple" class="dialog-toolbar">
                    <v-toolbar-title> Confirme sua Resposta </v-toolbar-title>
                    <v-spacer/>
                    <v-btn icon dark @click="dialogConfirmAnswer = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>

                <div class="p20 alg-txt-c">
                    <p>realmte deseja confirmar a questão:</p>
                    <p>{{ confirmQuestData.option }} - {{ confirmQuestData.text }}</p> 

                    <div align="center">
                        <v-btn dark color="purple" @click="confirmAnswer()">Confirmar</v-btn>
                    </div>
                </div>

          </v-card>
        </v-dialog>
  </div>
</template>

<script>
import AppBar from '../../components/AppBar.vue';
import QuestionForm from '../../components/QuestionForm'
export default {
  components: { AppBar, QuestionForm },
  data:() => ({
      selectMatter:'',
      questions:'',

      dialogConfirmAnswer: false,
      confirmQuestData:'',
      paramSelectedQuest:'',
      confirmQuestionDatas:'',
      
      currentStep:1,
      stepQuestion:'',
      defaultQuestions:'',
  }),
  created(){
    let localSelectedMatter = JSON.parse(localStorage.getItem('selectedMatter'))
    if(localSelectedMatter){
      this.selectMatter = localSelectedMatter
    }
    this.setCurrentStepForm();
  },

  methods:{
      async getQuestionsByLevel(){
        let body = {
            matter:this.selectMatter._id,
            level:this.selectMatter.level,
            questLimit:3
        }

        const mattersResponse = await this.$http.post(this.$url + '/listByLevelAndLimit/question', body)
        this.defaultQuestions = mattersResponse.data.quests; 
        this.questions = mattersResponse.data.quests;
        this.setStep()
      },

      previewItens(param){
        console.log(" == PREVIEW == ")
        let previewArray = []
        previewArray.push(param)
        console.log(previewArray)
      },

      nextStep(){
        this.currentStep = this.currentStep+1
        this.requestForQuestions(this.currentStep)
        localStorage.setItem('stepQuestionForm', this.currentStep);
      },

      setCurrentStepForm(){
        let savedStep = localStorage.getItem('stepQuestionForm')
        if(!savedStep) localStorage.setItem('stepQuestionForm', this.currentStep);
        else this.currentStep = JSON.parse(localStorage.getItem('stepQuestionForm'))
        this.requestForQuestions(this.currentStep)
      },

      async requestForQuestions(stepLevel){
          let body = { matter:this.selectMatter._id, level:stepLevel, questLimit:3 }
          const mattersResponse = await this.$http.post(this.$url + '/listByLevelAndLimit/question', body)
          this.questions = mattersResponse.data.quests
      },

      checkAnswer(param){
        console.log(param)
        this.dialogConfirmAnswer = true
        this.paramSelectedQuest = param
        this.confirmQuestData = param.selectedAnswer
      },


      async confirmAnswer(){

        console.log(this.paramSelectedQuest)
        let currentPlayer =  JSON.parse(localStorage.getItem('player'))
        let body = {
            questId:this.paramSelectedQuest.selectedAlternativeParam._id,
            player:currentPlayer.player._id,
            playerOption:this.paramSelectedQuest.selectedAnswer.option
        }
        const answerQuestion = await this.$http.post(this.$url + '/answer/question', body);
        if(!answerQuestion || answerQuestion.length === 0) this.$vs.notification({ duration: 9000, progress: 'auto', color:'danger', title: 'Ops! Algo deu errado!'})
        if(answerQuestion){
          this.$vs.notification({ duration: 9000, progress: 'auto', color:'success', title: 'Sucesso ao responder.',})
          this.dialogConfirmAnswer = false
          this.confirmQuestionDatas = body
        }
      },
  }
}
</script>

<style>

</style>