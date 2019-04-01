<template>
  <div>
    <h1 class="content" v-on:click="Submit">vue ssrass</h1>
    <router-link to="/foo">Bar</router-link>
    <br>
    <router-link to="/Login">Main</router-link>
    <br>
    <router-link to="/cs">cs</router-link>
    <br>
  </div>
</template>
<script lang="ts">
  import axAxios from '../axios'
  import Component from 'vue-class-component'
  import { AsyncDataParams } from 'types/shims-asyncData'

  @Component({
    mixins: [],
    components: {}
  })
  export default class Main extends axAxios {
    asyncData( params: AsyncDataParams ) {
      return params.store.dispatch('getInfo')
    }

    searchInfo: object = {
      userName: '',
      passWord: ''
    };

    Submit() {
      this.apis$.post('/api/logIn', this.searchInfo).subscribe(
        (res: any) => {
          console.log(res)
        },
        (err: any) => {
        }
      )
    };
 }
</script>
<style lang="less" scoped>
  .content {
    font-size: 120px;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 20px;
    color: #56a7fd;
    animation: all 0.5s;
  }
</style>
