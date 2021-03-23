<template>
  <div>

      <div class="bottom-bar d-flex ac">

        <div class="align-button mt-2">
          <v-btn to="/PreviewGame" outlined dark color="white">
              INICIO
          </v-btn>

          <v-btn to="/SelectSubject" class="ml-2" outlined dark color="white">
              Selecionar matéria
          </v-btn>
        </div>

        <div class="ml-a container-swicth">
          <v-switch
            color="white"
            v-model="darkTheme"
            :label="switchName"
          ></v-switch> 
        </div>

      </div>

  </div>
</template>

<script>
export default {
    name: 'AppBar',

    data: () => ({
      darkTheme: false,
      switchName:'Luzes acessas'
    }),

    created(){
        if(this.$vuetify.theme.dark){this.darkTheme = true}
        else (this.darkTheme = false)
    },
    
    watch:{
      darkTheme(){
          if(!this.darkTheme){
            this.$vuetify.theme.dark = false
            this.switchName = 'Luzes acessas'
            
          }else{
            this.$vuetify.theme.dark = true
            this.switchName = 'Luzes apagadas'
          }
      }
    }
}
</script>

<style lang="scss">
    .align-button{
        align-items: center;
        box-sizing: border-box;
        display: inline-flex;
    }

    .bottom-bar{
      justify-content: center;
      max-width: 40%;
      margin-bottom: 70px;
      width: 100%;
      background-color: #9c27b0;
      padding: 10px;
      border-radius: 0px 0px 10px 10px;
    }

    .container-swicth{
        .v-input{
            height: 30px;
        }
    }
</style>