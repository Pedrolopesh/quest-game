<template>
  <div id="app_p">
    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {

  components: { },

  data:() => ({

  }),

  computed: {

    ...mapGetters({ })

  },


methods: {
  
    ...mapActions({ }),
    
},

created() {}

}
</script>
<style scoped>


.router-anim-enter-active {
  animation: coming .3s;
  animation-delay: .3s;
  opacity: 0;
}
.router-anim-leave-active {
  animation: going .2s;
}
@keyframes going {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
@keyframes coming {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
