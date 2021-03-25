<template>
  <div class="p20">
    <v-form v-model="valid">
        <v-text-field
            v-model="title"
            :counter="50"
            label="Titulo para conjunto de questões"
            required
        ></v-text-field>

        <div align="center">
            <v-btn dark color="purple" @click="registerQuest()">Cadastrar</v-btn>
        </div>
    </v-form>

  </div>
</template>

<script>
export default {
    data:() => ({
        title:'',
        valid: true,

    }),

    methods:{
        async registerQuest(){
            let playerId = JSON.parse(localStorage.getItem('player'))

            let body = {
                title: this.title,
            }

            const quest = await this.$http.post(this.$url + '/create/matter', body)

            if(!quest.data || quest.status != 201){
                this.$vs.notification({ duration: 9000, progress: 'auto', color:'danger', title: 'Erro ao cadastrar Matéria',})
                this.closeModal()

            }else{
                this.$vs.notification({ duration: 9000, progress: 'auto', color:'success', title: 'Sucesso ao cadastrar, matéria.' })
                this.closeModal()
                
            }
        },

        closeModal(){
            this.$emit('closeDialog', false)   
        }
    }
}
</script>

<style>

</style>