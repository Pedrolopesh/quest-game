<template>
  <div>
    <div class="head">
      <img src="../../assets/img/logo-type.png" alt="logo" class="logo">
  </div>
   <div>

    <div class="conteiner-master">
      <div class="conteiner" v-for="(item, index) in itens" :key="index">
    
        <div class="container-cups">
          <h1 class="title">{{ item.nickname }}</h1>
          <img :src="item.image" alt="ranking 2" class="cup-image" />
          <h2 class="score" :class="'cup-'+ (index + 1)"> Score: {{ item.score }} </h2>
        </div>

   </div>

  </div> 
  

  </div>
    <button class="play" @click="funcao()">JOGAR</button>
  </div>
</template>
<script>

export default {
  //data é o espaço que contem todas as variaveis globais
  data: () => ({
    itens:[
      {nickname:'Player 1',image:'https://res.cloudinary.com/publi-node-uploads/image/upload/v1616475803/cup1_i5gph4.png', score: 300},
      {nickname:'Player 2',image:'https://res.cloudinary.com/publi-node-uploads/image/upload/v1616475803/cup2_eyffyf.png', score: 500},
      {nickname:'Player 3',image:'https://res.cloudinary.com/publi-node-uploads/image/upload/v1616475802/cup3_ye63ht.png', score: 600},
    ],
  }),


  //created significa uma função que executa assim que a pagina carrega
  created(){
    this.test()
  },


  // methods é o espaço para declarar as funções que existem
  methods:{

    test(){
      console.log('sdosajdosjaiodjsoaj')
      for(let i = 0; i < 5; i++){
        console.log(i)
      }
    },

    funcao(){
      
    }

  }
}
</script>
<style lang="scss">
.conteiner-master{
  max-width: 50%;
  width: 1500px;
  display: flex;
  background-color: rgb(219, 219, 219);
  border-radius: 20px;
  box-shadow: 7px 6px 15px rgba(0, 0, 0, 0.424) !important;
  padding: 30px;
  margin-left: auto;
  margin-top: 20px;
  margin-right: auto;
  margin-bottom: 1px;
}
.conteiner {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width: 1020px;
}

.container-cups{
  margin-left: 20px;
  margin-right: 20px;
}

.title{
  background-color: white;
  border-radius: 20px;
  border: 4px solid rgb(78, 26, 78);
  width: 250px;
  margin-right: auto;
  margin-left: auto;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
  color: goldenrod;
  background: rgb(78, 26, 78);
}

.score{
  border-radius: 10px;
  border: 4px solid rgb(78, 26, 78);
  width: 120px;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
  color: goldenrod;
}
.play {
  border: 4px solid rgb(78, 26, 78);
  border-radius: 15px;
  width: 100px;
  padding: 10px;
  background: rgb(200, 202, 206);
  max-width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 886px;
  margin-right: 100px;
  margin-top: auto;
  margin-bottom: auto;
  display: block;
  font-family:cursive;
  font-weight: lighter;
}
.cup-image{
  width: 250px;
}
.cup-1 {
  
  background-color: #51c6db ;
}

.cup-2 {
  
  background-color: #e05000;
}

.cup-3 {
 background-color: #51b764;
}


.logo{
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 270px;
  width: 250px;
  max-width: 100%;
}
</style>

