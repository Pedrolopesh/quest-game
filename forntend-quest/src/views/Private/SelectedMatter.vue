<template>
  <div>
      <AppBar />


        <div v-for="(item,i) in questions" :key="i">
            <QuestionForm v-if="i < 3" :itens="item"/>
        </div>

  </div>
</template>

<script>
import AppBar from '../../components/AppBar.vue';
import QuestionForm from '../../components/QuestionForm'
export default {
  components: { AppBar, QuestionForm },
  data:() => ({
      selectMatter:'',
      questions:''
  }),
  created(){
    let localSelectedMatter = JSON.parse(localStorage.getItem('selectedMatter'))
    if(localSelectedMatter){
        this.selectMatter = localSelectedMatter
        this.getQuestionsByLevel()
    } 
  },

  methods:{
      async getQuestionsByLevel(){
        let body = {
            matter:this.selectMatter._id,
            level:this.selectMatter.level
        }

        const mattersResponse = await this.$http.post(this.$url + '/listByLevel/question', body)
        this.questions = mattersResponse.data.quests
      }
  }
}
</script>

<style>

</style>