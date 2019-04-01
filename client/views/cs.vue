<template>
  <div>
  <h1 >
    情殇夏威夷
    其实吧，我真的很感激主播给我们分享的精彩故事， 越听越爱听，越听越想听。真的觉得每天一集更新的很慢。可是我也知道主播辛苦。在主播不耽误自己工作的同时，还在为我们这些听众服务。每天都到了深夜才能为我们播。真的很不容易。所以觉得更新一集，我已经很满足了。</h1>
  <img src="../assets/img/83e9c2b8114dc162a7afa48ebada25d7.jpg"/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { AsyncDataParams } from 'types/shims-asyncData'

@Component
export default class Cs extends Vue {
  asyncData (params: AsyncDataParams) {
    return params.store.dispatch('getInfo')
  }
}
</script>
