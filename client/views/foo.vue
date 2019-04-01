<template>
  <div>
  <h1 >vuebbbbbbbbbbbbb</h1>
    <span class="unis-apps"></span>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { AsyncDataParams } from 'types/shims-asyncData'

@Component
export default class Foo extends Vue {
  asyncData (params: AsyncDataParams) {
    return params.store.dispatch('getInfo')
  }
}
</script>
