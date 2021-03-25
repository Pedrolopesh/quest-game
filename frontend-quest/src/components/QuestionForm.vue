<template>
  <div class="container-form ac mt-15">
        <span class="alg-txt-c">{{ currentStep }}</span>

        <h3>{{ itens.description }}</h3>
        <div class="d-flex" v-for="(item,i) in itens.alternatives" :key="i">
            <!-- {{ checkbox }} -->
            <!-- {{ i }} -->
            <!-- <span v-if="checkbox[0] === i"> AQUI </span> -->
                <!-- :value="checkbox" -->
            <v-checkbox
                @click="select(i, itens,item)"
                :label="item.option+` - `+ item.text"
                :disabled="disabledCheckBox"
            ></v-checkbox>

        </div>
  </div>
</template>

<script>
export default {
    props:['itens', 'confirmQuestion', 'currentStep'],

    data:() => ({
        checkbox:[],
        selectedAlternatives:[],
        dialogConfirmAnswer: false,
        confirmquestData:'',
        disabledCheckBox: false,

        selectQuest:'',

        checkboxActive:false,
    }),

    methods:{
        async select(i, selectedAlternativeParam, selectedAnswer){
            let emitParams = { selectedAlternativeParam, selectedAnswer }
            let newArray = []
            let currentSelectedQuest = { questId: selectedAlternativeParam._id, select: true, alternative:selectedAnswer.option}
            newArray.push(currentSelectedQuest)
            this.selectQuest = newArray
            this.$emit('checkOutAnswer', emitParams)
        },

        checkStatusBox(i){
            this.checkbox = []
            this.checkbox.push(i)
            if(checkbox[0] === i) this.checkboxActive = true
            else this.checkboxActive = false
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
            console.log('things ==', this.confirmQuestion)
            // this.addItensOnArray(this.confirmQuestion)
            this.selectedCheckbox()
        },

        currentStep(){
            this.selectQuest = ''
            this.disabledCheckBox = false
            location.reload();
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