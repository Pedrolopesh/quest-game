<template>
  <div>
      <h1> Ciências exatas </h1>

        <div class="container-form ac mt-15">
        {{ chek1Form.checkAlternative1 }}
        <h3 v-if="questions[0].description">{{ questions[0].description }}</h3>
        
          <div class="d-flex">
              <v-checkbox
                  v-model="chek1Form.checkAlternative1"
                  :label="questions[0].alternatives[0].option+` - `+ questions[0].alternatives[0].text"
                  :disabled="disabledCheckBox"
              ></v-checkbox>
              <v-checkbox
                  v-model="chek1Form.checkAlternative2"
                  :label="questions[1].alternatives[1].option+` - `+ questions[1].alternatives[1].text"
                  :disabled="disabledCheckBox1"
              ></v-checkbox>
          </div>
        </div>

        <div align="center">
          <v-btn v-if="currentStep !== 3" dark color="purple" class="mb-10 mt-10" @click="nextStep()">Proxima Fase</v-btn>
          <v-btn v-else dark color="purple" class="mb-10 mt-10" @click="finishGame()">Finalizar Jogo</v-btn>
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
export default {
  data:() => ({
    level:'',
    currentStep:1,
    dialogConfirmAnswer: false,
    confirmQuestData:'',
    selectMatter:'',
    questions:'',

    disabledCheckBox: false,

    chek1Form:{
      checkAlternative1:false,
      checkAlternative2:false,
      checkAlternative3:false,
      checkAlternative4:false,
      checkAlternative5:false,
    }

  }),

  created(){
    let localSelectedMatter = JSON.parse(localStorage.getItem('selectedMatter'))
    if(localSelectedMatter){
      this.selectMatter = localSelectedMatter
    }
    this.setCurrentStepForm();
  },

  methods:{
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
  }
}
</script>

<style>

</style>