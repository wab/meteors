<template>
  <div id="app">
    <logo></logo>
    <p>Welcome to <span class="text-primary">meteors</span> app ! </p>
    <form v-on:submit="update" class="cityform">
       <div class="input-group">
        <span class="input-group-label"><i class="fa fa-map-marker"></i></span>
        <label class="show-for-sr" for="city">Select a city</label>
        <input class="input-group-field" id="city" type="text" v-model="city">
        <div class="input-group-button">
          <input type="submit" class="button" value="Voir">
        </div>
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

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

pre {
  text-align: left;
}

#app {
  max-width: 500px;
  text-align: center;
  flex-basis: 60%;
}

.cityform {
  margin-bottom: 2rem;
}

</style>
