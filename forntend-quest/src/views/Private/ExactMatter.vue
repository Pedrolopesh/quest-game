<template>
  <div>
      <h1> Ciências exatas </h1>
  </div>
</template>

<script>
export default {
  data:() => ({
    level:'',
  }),

  created(){
    let currentLevel = JSON.parse(localStorage.getItem('selectedMatterLevel'))
    if(currentLevel) this.level = currentLevel

    this.getQuestionsByLevel()
  }
}
</script>

<style>

</style>