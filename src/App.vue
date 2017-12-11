<template>
  <div id="app">
    <div class="container">
      <button class="btn btn-primary" v-on:click="atualizar()">Atualizar</button>
      <hr>
      <app-barrinha v-for="config in configuracaoArray" v-bind:dados="config" :key="config.nome"></app-barrinha>
    </div>
  </div>
</template>

<script>
import Barrinha from './components/barraProgresso.vue'

export default {
  name: 'app',
  data () {
    return {
      configuracaoArray : [
        { nome : 'Buffer', class: '', icon : 'esteira'},
        { nome : 'Coordenador', class: 'danger', icon : 'coordenador2'},
        { nome : 'Fila', class: 'warning', icon : 'esteira'},
        { nome : 'Executando', class: 'info', icon : 'executando'},
        { nome : 'Finalizando', class: 'success', icon : 'finalizando'}
      ]
    }
  },
  methods : {
    atualizar(){
      this.$http.get('http://localhost:8090/progressos', { headers: { 'Access-Control-Allow-Origin': '*' } })
        .then(response => { 
          return response.json();
        })
        .then(data => {
          console.log(data);
          for (var i=0; data.length; i++){
            this.$store.commit('setItemValue', data[i]);
          }
          
        });
    }
  },
  components : {
    'app-barrinha' : Barrinha
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
