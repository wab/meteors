<template>
  <div id="app">
    <logo></logo>
    <p></icon> Welcome to your <span>meteo</span> app ! </p>
      <form v-on:submit="update">
          <input id="city" type="text" class="" v-model="city">
          <label class="active" for="city">City</label>
        <div class="input-field">
          
          <button class="btn large">OK</button>
        </div>
      </form>
      
    
    <city :city.sync="city"></city>    
    
  </div>
</template>

<script>
import City from './components/City'
import Logo from './components/Logo'

export default {
  components: {
    City,
    Logo
  },
  data: function () {
    return {
      city: 'Rennes'
    }
  },
  methods: {
    update (e) {
      e.preventDefault()
      this.$broadcast('updateCity', this.city)
    }
  }
}
</script>

<style lang="scss">

//@import 'foundation';

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
  max-width: 300px;
}
</style>
