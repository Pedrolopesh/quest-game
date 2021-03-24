<template>
  <div class="container-form ac mt-15">
        <h3>{{ itens.description }}</h3>

        <div class="d-flex" v-for="(item,i) in itens.alternatives" :key="i">
            <v-checkbox
                @click="select(item)"
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
        checkbox:[]
    }),

    methods:{
        select(param){
            console.log(param);
            this.checkbox = param
            this.selectedCheckbox()
        },

        selectedCheckbox(){
            if(this.checkbox.length !== 0) return true
            else return false 
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