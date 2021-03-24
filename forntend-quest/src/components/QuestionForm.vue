<template>
  <div class="container-form ac mt-15">
        <h3>{{ itens.description }}</h3>

        <div class="d-flex" v-for="(item,i) in itens.alternatives" :key="i">
            <v-checkbox
                @click="select(itens,item)"
                :label="item.option+` - `+ item.text"
                :disabled="selectedCheckbox()"
            ></v-checkbox>



            <!-- <span>{{item.option}} </span> -->
            <!-- <span> - {{item.text}}</span> -->
        </div>
  </div>
</template>

<script>
export default {
    props:['itens'],

    data:() => ({
        checkbox:[],
        selectedAlternatives:[]
    }),

    methods:{
        select(selectedMatter, selectedAnswer){
            let newAnswer = {
                _id:selectedMatter._id,
                playerAnswer:selectedAnswer.option
            }
            this.selectedAlternatives.push(newAnswer)
            this.checkbox = selectedMatter
            this.selectedCheckbox()
            console.log(this.selectedAlternatives)
        },

        selectedCheckbox(){
            if(this.checkbox.length !== 0) return true
            else return false 
        }
    },

    watch:{
        // checkbox(){
        //     console.log()
        // }
    }
}
</script>

<style>
    .container-form{
        max-width: 50%;
        width: 100%;
    }
</style>