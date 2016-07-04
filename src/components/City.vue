<template>

  <div class="card">
    <map class="activator" :coord.sync="LatLng"></map>
    <div class="card-content">
      <h2>{{city}}</h2>
    </div>
  </div>

</template>

<script>
import Map from './Map'

export default {
  components: {
    Map
  },
  props: {
    city: String
  },
  data () {
    return {
      data: {},
      LatLng: {
        lat: 48.11,
        lng: -1.68
      }
    }
  },
  methods: {
    getData: function (city) {
      this.$http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',&lang=fr&units=metric&appid=801c6f79c0eaf3711dbda7eb7f2676c6').then((response) => {
        // success callback
        this.data = response.data
        this.LatLng = {
          lat: this.data.coord.lat,
          lng: this.data.coord.lon
        }
        console.log('getData : ' + JSON.stringify(this.data))
      }, (response) => {
          // error callback
        console.log(response)
      })
    }
  },
  events: {
    'hook:created': function () {
      console.log('init with Rennes')
      this.getData('Rennes')
    },
    updateCity: function (city) {
      console.log(city)
      this.getData(city)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../animations';
  .card-content {
    position: relative;
  }
  .infos {
    position: relative;
  }
</style>
