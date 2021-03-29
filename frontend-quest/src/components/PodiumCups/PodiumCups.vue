<template>
  <div>

      <div class="d-flex container-podium-cups mt-10">
        <!-- <span class="icon-size-30" v-html="svg.cup_1"></span> -->
        <h3 class="mr-2">1ª</h3>
        <span v-if="podiumItems[0].fistPosition">{{ podiumItems[0].fistPosition[0].playerNickname }}</span>
      </div>

      <div class="d-flex container-podium-cups">
        <!-- <span class="icon-size-30" v-html="svg.cup_2"></span> -->
        <h3 class="mr-2">2ª</h3>
        <span v-if="podiumItems[0].secondPosition.length !== 0">{{ podiumItems[0].secondPosition[0].playerNickname }}</span>
      </div>
      
      <div class="d-flex container-podium-cups">
        <!-- <span class="icon-size-30" v-html="svg.cup_3"></span> -->
        <h3 class="mr-2">3ª</h3>
        <span v-if="podiumItems[0].thierdPosition">{{ podiumItems[0].thierdPosition[0].playerNickname }}</span>
      </div>

  </div>
</template>
<script>
import svg from '../../assets/svgs'
export default {
    props:['podiumItems'],
    data:() => ({
        svg
    })
}
</script>

<style lang="scss">
    .icon-size-30{
        svg{
            max-width: 100%;
            width: 100px !important;
        }
    }
</style>