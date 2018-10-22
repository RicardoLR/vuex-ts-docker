<template>
  <div id="app">

      <!-- Navegacion usando menu NAV -->

      <b-container>
        <b-nav tabs>
          <b-nav-item to="/todos">Todos</b-nav-item>
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/secret">Secret</b-nav-item>

          <!-- usando State de clase App : isLogged -->
          <b-nav-item v-if="isLogged" @click.prevent="logout">Logout</b-nav-item>
        </b-nav>
        <h1 class="text-center text-muted">Vue Vuex TS</h1>

        <!-- Navegacion usando router -->

        <router-view />


      </b-container>

      <div class="footer">
        <p>Email: ricardolopez.computing@gmail.com</p>
      </div>


  </div>
</template>



<style lang="scss">
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
    margin-top: 10px;
  }
</style>



<script lang="ts">

  import { Component, Vue, Watch } from 'vue-property-decorator';
  import {State} from 'vuex-class';
  import AuthMixin from '@/mixins/AuthMixin';
  
  @Component({
      mixins: [AuthMixin]
  })
  export default class App extends Vue {
      
      /**
      Estos STATE son como en Redux los Modules 
      */
      // llamado del store !: implica que puede no puede tener valor al inicio 
      @State('isLogged', {namespace: 'authModule'}) isLogged!: boolean;
      public currentPath: string = '/';
      
      @Watch('$route.path', {immediate: true})
      changeRoute (path: string): void {
          this.currentPath = path;
          console.log(this.currentPath);
      }
  }
</script>
