<template>
  <div>
        <div class="alg-txt-c mt-10 mb-1" @click="dialog = true">
            <v-chip class="mr-2 pointer" color="orange" outlined> <v-icon>mdi-information-variant</v-icon> </v-chip>
            <span class="clr-orange pointer">Veja algumas informações do jogo</span>
        </div>

        <v-dialog v-model="dialog" max-width="600">
          <v-card class="card-modal">

                <v-toolbar dark color="purple" class="dialog-toolbar">
                    <v-toolbar-title>Informações gerais</v-toolbar-title>
                    <v-spacer/>
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-toolbar>


                <div class="container-info p20">
                    <h1 class="mb-2 mt-5">Objetivo Geral do Quizzz</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis nulla voluptatibus cumque illo porro, sequi tempore voluptate, non, voluptatum ducimus deserunt assumenda illum. Totam, voluptate! Ipsa rem nobis soluta!</p>
                
                    <h1 class="mb-2 mt-15">Pontuações</h1>
                    <div>
                        <div class="d-flex mt-10">
                            <img class="image-size-info" src="../assets/img/cup_1.png" alt="winner 1"/>
                            <span class="ml-4">Para Conseguir o primeiro Lugar sua Pontuação precisar estar entre 1800 a 1500 pontos</span>
                        </div>

                        <div class="d-flex mt-10">
                            <img class="image-size-info" src="../assets/img/cup_2.png" alt="winner 2"/>
                            <span class="ml-4">Já para Conseguir o segundo Lugar sua Pontuação precisar estar entre 1500 a 1200 pontos</span>
                        </div>
                        
                        <div class="d-flex mt-10">
                            <img class="image-size-info" src="../assets/img/cup_3.png" alt="winner 3"/>
                            <span class="ml-4">E por fim, para Conseguir o segundo Lugar sua Pontuação precisar estar entre 900 a 500 pontos</span>
                        </div>
                    </div>
                

                    <div>
                        <h1 class="mb-2 mt-15">Especificações</h1>
                        <span>O usuário deverá entrar com seu nickname, selecionar a matéria desejada, da qual colocamos matérias que caem no exame nacional do ensino médio ( enem ), estão divididas em : Ciências da natureza, Ciências humanas e ciências exatas.</span>
                            <br>
                            <br>
                        <span>Após selecionado a matéria, será apresentado questões aleatórias para o usuário, onde cada acerto irá gerar uma pontuação e após será exibida no ranking.</span>
                            <br>
                            <br>
                        <span>Estamos utilizando as ferramentas de para desenvolvimento web sendo elas, HTML, Javascript e frameworks de estilização e função, E também estamos utilizando um banco de dados não relacional e fazendo a comunicação entre o banco de dados e o nosso jogo através do node js.</span>
                    </div>

                    <div>
                        <h1 class="mb-2 mt-15">Regras</h1>
                        <ul>
                            <li>Existiram 3 assuntos (“Ciências da natureza”, “Ciências humanas”, “ciências exatas”);</li>
                            <li> Cada assunto terá até 27 perguntas, </li>
                            <li> Existem um total de 3 rodas e total 9 questões </li>
                            <li> Cada rodada terá 3 perguntas sem tempo limite para resposta. </li>
                            <li> Cada rodada terá 3 questões que serão escolhidas de forma randômica. </li>
                            <li> Para passar de rodada será necessário pelo menos 2 perguntas certas, caso contrário o jogador não pode mais avançar de fases. </li>
                            <li> 1º rodada terão alternativas mais fáceis, da qual induzirá o jogador a acertar mais facilmente  (exemplo: questão 1: 1+1 = ?; a) Palmeiras; b) 2). </li>
                            <li> A partir da Segunda rodada o jogo fica mais difícil. </li>
                            <li> Após conclusão de todas as questões de todas as rodadas, calcular pontuação e gravar pontos do jogador. </li>
                            <li> Mostrar ranking de pontos em tempo real ao final do jogo. </li>
                            <li> O jogo como contém 3 rodadas, serão 3 “Rounds” que a cada round que se passa o grau de dificuldade evolui. </li>
                            <li> Devido ao aplicativo ser um protótipo de simulador, destinado a alunos que estão na reta final do Ensino Médio para a fase pré vestibular, seria de interesse do mesmo para buscar conhecimento. </li>
                        </ul>
                    </div>
                </div>

          </v-card>
        </v-dialog>
  </div>
</template>

<script>

export default {
    data:() => ({
        dialog:false,
    }),

    methods:{

    },

    watch:{

    }
}
</script>

<style lang="scss">
    .container-info{
        max-width: 100%;
        width: 100%;
    }

    .image-size-info{
        display: block;
        max-width: 100%;
        width: 10%;
    }
</style>