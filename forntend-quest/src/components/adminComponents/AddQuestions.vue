<template>
  <div>
      
    <v-form v-model="valid">
        <v-container>
            <div class="p15">

                <div>
                    <v-select 
                        color="purple" 
                        v-model="selectedQuestion"
                        :items="quests"
                        item-value="_id" item-text="title"
                        label="Selecione a matéria" 
                        :error="questFormError.questError"
                        outlined
                    ></v-select>

                    <v-text-field
                        v-model="questionDescription"
                        :counter="50"
                        label="Descrição da pergunta"
                        required
                        :error="questFormError.descriptionError"
                    ></v-text-field>

                    <v-select
                        class="mt-7"
                        color="purple" 
                        v-model="questionLevel"
                        :items="leves"
                        label="Nivel de dificuldade da questão" 
                        item-value="level" item-text="text"
                        :error="questFormError.questError"
                        outlined
                    ></v-select>

                    <v-select
                        class="mt-7"
                        color="purple" 
                        v-model="correctAlternative"
                        :items="alternatives"
                        label="Qual a alternativa correta?" 
                        item-value="option" item-text="option"
                        :error="questFormError.correctAlternativeError"
                        outlined
                    ></v-select>

                    <v-text-field
                        v-model="points"
                        :counter="50"
                        label="Quantidade de pontos"
                        type="number"
                        :error="questFormError.pointsError"
                        required
                    ></v-text-field>

                    <div class="d-flex" v-for="(itens, index) in alternatives" :key="index">
                        <span class="mt-5 mr-3">{{ itens.option }} - </span>

                        <v-text-field
                            v-model="itens.text"
                            :counter="50"
                            label="Titulo para conjunto de questões"
                            required
                        ></v-text-field>
                    </div>

                </div>


            <div align="center">
                <v-btn dark color="purple" @click="registerQuest()">Cadastrar</v-btn>
            </div>

            </div>
        </v-container>
    </v-form>

  </div>
</template>

<script>
export default {
    data:() => ({
        valid: true,
        quests: '',
        selectedQuestion: '',
        questionDescription:'',
        leves:[
            {level:1, text:'1 - Nivel facil'},
            {level:2, text:'2 - Nivel médio'},
            {level:3, text:'3 - Nivel dificil'},
        ],
        alternatives:[
            {option:'A', text:''},
            {option:'B', text:''},
            {option:'C', text:''},
            {option:'D', text:''},
            {option:'E', text:''},
        ],

        questFormError:{
            questError: false,
            descriptionError: false,
            correctAlternativeError: false,
            pointsError: false,
        }

    }),

    created(){
        this.getAllQuests()
    },

    methods:{
        registerQuest(){
            console.log(this.alternatives)

            let body = {
                questions: this.alternatives
            }
        },
        closeModal(){
            this.$emit('closeDialog', false)   
        },
        getAllQuests(){
            this.$http.get(this.$url + '/quests').then(resp => {
                console.log(resp)
                this.quests = resp.data.quests
            })
        }
    }
}
</script>

<style>

</style>