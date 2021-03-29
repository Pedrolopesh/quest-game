<template>
  <div>

    <!-- <AppBar /> -->


      <v-card class="p20 ac mt-20" max-width="700">
      <h1 class="alg-txt-c mb-15">Selecione a máteria que deseja jogar 🤔</h1>

      <div v-for="(item,i) in matters" :key="i">
          <div align="center" class="mt-1">
            <v-btn @click="selectMatter(item)" color="purple" dark class="mt-1">
              {{item.title}}
            </v-btn>
          </div>
      </div>

        <hr class="mt-10">
      <InfoPlayRulesDialog />
      </v-card>

  </div>
</template>

<script>
import AppBar from '../../components/AppBar.vue';
import InfoPlayRulesDialog from '../../components/InfoPlayRulesDialog.vue'

export default {
  data:() => ({
    itens:[
      {title:'Ciencias Humanas', path:'/HumanMatter', icon:'mdi-account-box'},
      {title:'Ciências da Natureza', path:'/NatureMatter', icon:'mdi-dog'},
      {title:'Ciencias exatas', path:'/ExactMatter', icon:'mdi-book-open-variant'},
    ],
    matters:'',
  }),
  components: { AppBar, InfoPlayRulesDialog },
  created(){

    this.getAllMetters()
    // this.getMatterByLevel()

  },

  methods:{
    async getAllMetters(){
      const queryMatters = await this.$http.get(this.$url + '/listAll/matter').catch(err => { console.log(err) })
      if(!queryMatters && queryMatters.length === 0) console.log(queryMatters)

      this.matters = queryMatters.data.matter
    },
    async getMatterByLevel(matterParam){
      let body = {
        matter:matterParam,
        level:1
      }
      const mattersResponse = await this.$http.post(this.$url + '/listByLevel/question', body)
      console.log(mattersResponse.data)
      
    },

    selectMatter(selectedMatter){
      let selectedMaterObject = {
        _id:selectedMatter._id,
        title:selectedMatter.title,
        level:1
      }

      localStorage.setItem('selectedMatter', JSON.stringify(selectedMaterObject));
      this.$router.push('/PlayingView')
      // this.$router.push('/SelectedMatter')
      // this.$router.push('/ExactMatter')
    }
  }
}
</script>

<style>

</style>