<template>
  <div>
      <AppBar />

      <div align="center" class="mt-3">
        <v-btn dark color="purple" @click="dialogQuestions = true">Criar Máteria</v-btn>
      </div>
       
      <div align="center" class="mt-3">
        <v-btn dark color="purple" @click="dialogCollectionQuest = true">Criar perGuntas para materia</v-btn>
      </div>


      <div class="container-panels d-block ac mt-5">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-header>
              Mais configuraçõe
            </v-expansion-panel-header>
            <v-expansion-panel-content v-for="(item,i) in itens" :key="i">

              <div align="center" class="mt-1">
                <v-btn :to="item.path" color="purple" dark class="mt-1">
                  <v-icon class="mr-1">{{item.icon}}</v-icon>
                  {{item.title}}
                </v-btn>
              </div>

            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>


        <v-dialog v-model="dialogQuestions" max-width="600">
          <v-card class="card-modal">

                <v-toolbar dark color="purple" class="dialog-toolbar">
                    <v-toolbar-title>Cadastrar Matéria</v-toolbar-title>
                    <v-spacer/>
                    <v-btn icon dark @click="dialogQuestions = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>

            <QuestForm @closeDialog="closeAllDialogsOpen"/>

          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogCollectionQuest" max-width="600">
          <v-card class="card-modal">

                <v-toolbar dark color="purple" class="dialog-toolbar">
                    <v-toolbar-title> Cadastrar Questões de uma máteria </v-toolbar-title>
                    <v-spacer/>
                    <v-btn icon dark @click="dialogCollectionQuest = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>

            <AddQuestions @closeDialog="closeAllDialogsOpen"/>

          </v-card>
        </v-dialog>

  </div>
</template>

<script>
import AddQuestions from '../../components/adminComponents/AddQuestions.vue';
import QuestForm from '../../components/adminComponents/QuestForm.vue';
import AppBar from '../../components/AppBar.vue';

export default {
  components: { AppBar, QuestForm, AddQuestions },
  data:() => ({
    dialogCollectionQuest: false,
    dialogQuestions: false,

    itens:[
      {title:'controle de Matérias', path:'/MatterControl', icon:'mdi-book-open-variant'},
      {title:'Controle de perguntas', path:'/QuestControl', icon:'mdi-progress-question'},
      {title:'Controle de jogadores', path:'/PlayerControl', icon:'mdi-clipboard-account'},
    ]

  }),
  methods:{
    closeAllDialogsOpen(){
        this.dialogCollectionQuest = false
        this.dialogQuestions = false
    }
  },
}
</script>

<style lang="scss">
  .container-panels{
    max-width: 20%;
    width: 100%;
  }
</style>