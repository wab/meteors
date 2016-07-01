<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <p></icon> Welcome to your <span>meteo</span> app ! </p>
    <div class="select">
      <input type="text" name="" v-model="city">
      <button class="waves-effect waves-light btn" v-on:click="update">Voir <icon name="material-wb_sunny"></button>
    </div>
    
    
    <city :city.sync="city"></city>
    
  </div>
</template>

<script>
import City from './components/City'
import Icon from 'vue-icons'

export default {
  components: {
    City,
    Icon
  },
  data: function () {
    return {
      city: 'Rennes'
    }
  },
  methods: {
    sayGoodbye: function () {
      console.log('goodbye!')
    },
    update () {
      this.$broadcast('updateCity', this.city)
    }
  }
}
</script>

<style lang="scss">
$primary-color: color("materialize-red", "lighten-2");
html {
  height: 100%;
}

body {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
}

pre {
  text-align: left;
}

#app {
  color: #2c3e50;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
  flex-basis: 50%;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
