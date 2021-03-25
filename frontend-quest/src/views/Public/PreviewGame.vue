<template>
  <div class="home">

        <AppBar/>

        <v-card class="form-container p20 ac">

          <v-text-field
            v-model="nickname"
            :counter="50"
            label="nickname"
            outlined
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            label="e-mail"
            outlined
            required
          ></v-text-field>

          
          <div align="center">
              <v-btn :disabled="!nickname || !email" dark color="purple" @click="registerPlayer()">Jogar</v-btn>
          </div>
        
        </v-card>

  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '../../components/AppBar.vue'

export default {
  name: 'Home',
  components: {
    AppBar
  },

  data:() => ({
    nickname:'',
    email:'',
  }),

  methods:{
    registerPlayer(){

      let body = {
        nickname:this.nickname,
        email:this.email
      }

      this.$http.post(this.$url + '/player/create', body).then(resp => {
        if(!resp.data || resp.status != 201){
          this.$vs.notification({ duration: 9000, progress: 'auto', color:'danger', title: 'Erro ao cadastrar player',})
        
        }else{
          localStorage.setItem('player', JSON.stringify(resp.data));
          this.$vs.notification({ duration: 9000, progress: 'auto', color:'success', title: 'Sucesso ao cadastrar, Bem vindo Jogador: ' + resp.data.nickname,})
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .form-container{
    max-width: 25% !important;
    width: 100%;
  }
</style>