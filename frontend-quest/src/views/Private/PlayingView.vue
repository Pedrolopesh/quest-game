<template>
  <div>
      <AppBar />
      <PlayingForm />
  </div>
</template>

<script>
import AppBar from '../../components/AppBar.vue';
import PlayingForm from '../../components/PlayingForm/PlayingForm';
export default {
  components: { AppBar, PlayingForm },
  data:() => ({
    currentStep:1,
    selectMatter:'',
  }),
  created(){
    this.setLocalVariables();
  },
  methods:{
    setLocalVariables(){
    let savedStep = localStorage.getItem('stepQuestionForm')

    if(!savedStep) localStorage.setItem('stepQuestionForm', this.currentStep);
    else this.currentStep = JSON.parse(localStorage.getItem('stepQuestionForm'))

    let localSelectedMatter = JSON.parse(localStorage.getItem('selectedMatter'))
    if(localSelectedMatter) this.selectMatter = localSelectedMatter

    },
  }
}
</script>

<style>

</style>