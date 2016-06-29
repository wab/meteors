<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <p></icon> Welcome to your <span>meteo</span> app ! </p>
    <input type="text" name="" v-model="city">
    <button class="waves-effect waves-light btn" v-on:click="getData">Voir <icon name="material-wb_sunny"></button>

    <city :data="data"></city>

    <map :location="location"></map>

    <pre>{{data | json }}</pre>
    
  </div>
</template>

<script>
import City from './components/City'
import Map from './components/Map'
import Icon from 'vue-icons'

export default {
  components: {
    City,
    Map,
    Icon
  },
  data: function () {
    return {
      city: 'Rennes',
      data: {},
      location: {}
    }
  },
  methods: {
    getData: function () {
      this.$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + ',&lang=fr&units=metric&appid=801c6f79c0eaf3711dbda7eb7f2676c6').then((response) => {
        // success callback
        this.data = response.data
        this.location = this.data.coord
      }, (response) => {
        // error callback
      })
    }
  },
  ready () {
    this.getData()
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
