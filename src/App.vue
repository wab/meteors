<template>
  <div id="app" class="wrapper">
    <p class="intro">Welcome to <strong>meteors</strong> app, an vueJs test for <br><logo></logo></p>
    <form v-on:submit="update" class="cityform">
      <label class="show-for-" for="city">Enter a city</label>
       <div class="input-group">
        <span class="input-group-label"><i class="fa fa-map-marker"></i></span>
        
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

.cityform {
  margin-bottom: 2rem;
}

</style>
