<template>

  <div class="card">
    <div class="card-content">
      <header class="card-header">
        <div v-for="data in [data]" transition="slidup">
          <h2>{{city}}</h2>
          <div class="weather">
            <weather :code="code"></weather>
            {{main.temp}} °C
          </div>
        </div>
      </header>
      <p>{{data.main | json }}</p>
    </div>
    <map :coord.sync="LatLng"></map>
  </div>

</template>

<script>
import Map from './Map'
import Weather from './Weather'

export default {
  components: {
    Map,
    Weather
  },
  props: {
    city: String
  },
  data () {
    return {
      data: {},
      code: 0,
      LatLng: {
        lat: 0,
        lng: 0
      },
      main: {
        temp: '',
        pressure: '',
        humidity: ''
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
        this.code = this.data.weather[0].id
        this.main = this.data.main
      }, (response) => {
          // error callback
        console.log(response)
      })
    }
  },
  events: {
    'hook:created': function () {
      this.getData('Rennes')
    },
    updateCity: function (city) {
      this.getData(city)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../animations';

  .card-header {
    position: relative;
    min-height: 120px;
    overflow: hidden;
  }
  .weather {
    font-size: 2rem;
    line-height: 1;
  }
</style>
