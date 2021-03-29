<template>
    <div class="d-block mt-15">
        
        <div>
            <h1 class="alg-txt-c">Parabéns <span class="clr-red">{{ currentPlayer.player.nickname }}</span>, Missão cumprida com sucesso</h1>
        </div>

        <PodiumCups :podiumItems="podiumItems"/>

        <div class="container-podium mt-10 mb-5">
            <span class="cup-size" v-html="svgs.cup_1"></span>
            <v-chip outlined color="orange">{{ currentPlayer.player.nickname }}</v-chip>
        </div>

        <div class="mb-10">
            <h2 class="alg-txt-c">pontuação total: <v-chip>{{ toatalPoints }}</v-chip></h2>
        </div>

        <div align="center">
            <v-btn color="purple" @click="redirectAndCleanGame">Retornar</v-btn>
        </div>

    </div>
</template>
<script>
import svgs from '../../assets/svgs';
import PodiumCups from '../../components/PodiumCups/PodiumCups';

export default {
    components:{PodiumCups},
    data:() => ({
        svgs,
        currentPlayer: JSON.parse(localStorage.getItem('player')),
        toatalPoints: JSON.parse(localStorage.getItem('totalPoints')),
        podiumItems:''
    }),
    created(){
        this.getPodium()
    },
    methods:{
        async getPodium(){
            const podium = await this.$http.get(this.$url + '/podium')
            if(!podium.data || podium.status !== 200) console.log(podium)
            this.podiumItems = podium.data.message
        },

        redirectAndCleanGame(){
            localStorage.clear();
            this.$router.push('/Home')
        }
    }
}
</script>    
<style lang="scss">

.gameover{
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 868px;
    width: 100%;
    max-width: 100%;
}
.return{
    border: 4px solid rgb(78, 26, 78);
    border-radius: 15px;
    width: 100px;
    padding: 10px;
    background: rgb(78, 26, 78);
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
    
</style>