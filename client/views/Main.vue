<template>
    <div class="content">Hello World</div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { AsyncDataParams } from 'types/shims-asyncData'

@Component
export default class Main extends Vue {
  asyncData (params: AsyncDataParams) {
    return params.store.dispatch('getInfo')
  }
}
</script>
<style lang="stylus" scoped>
    .content
        font-size: 24px
</style>
