<template>
    <div class="content">Hello World</div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Main extends Vue {

}
</script>
<style lang="stylus" scoped>
    .content
        font-size: 24px
</style>
