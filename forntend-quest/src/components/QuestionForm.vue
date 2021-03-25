<template>
  <div class="container-form ac mt-15">

        <h3>{{ itens.description }}</h3>

        <div class="d-flex" v-for="(item,i) in itens.alternatives" :key="i">
            <v-checkbox
                @click="select(itens,item)"
                :label="item.option+` - `+ item.text"
                :disabled="disabledCheckBox"
            ></v-checkbox>

        </div>
  </div>
</template>

<script>
export default {
    props:['itens', 'confirmQuestion'],

    data:() => ({
        checkbox:[],
        selectedAlternatives:[],
        dialogConfirmAnswer: false,
        confirmquestData:'',
        disabledCheckBox: false,

        selectQuest:''
    }),

    methods:{
        async select(selectedAlternativeParam, selectedAnswer){
            let emitParams = { selectedAlternativeParam, selectedAnswer }
            this.selectQuest = { questId: selectedAlternativeParam._id, select: true }
            this.$emit('checkOutAnswer', emitParams)  
        },

        addItensOnArray(paramItens){
            let alternatives = []
            alternatives.push(paramItens);
            this.selectedAlternatives.push(paramItens);
        },

        selectedCheckbox(){
            if(this.selectQuest) this.disabledCheckBox = true
            else this.disabledCheckBox = false
        }
    },

    watch:{
        confirmQuestion(){
            this.addItensOnArray(this.confirmQuestion)
            this.selectedCheckbox()
        }
    }
}
</script>

<style>
    .container-form{
        max-width: 50%;
        width: 100%;
    }
</style>