<template>

  <section class="card">
    <div class="card-content">
      <header class="card-header">
        <div v-for="data in [data]" transition="slidup">
          <h2>{{cityname}} <weather :code="weather.id" class="wpicto"></weather></h2>
        </div>
      </header>
      <div class="weather">
        <div class="desc">{{weather.description}}</div>
        <div class="temperature">
          <dl>
            <dt>
              <picto name='picto-thermometer'></picto>
              <br>Température
            </dt>
            <dd><div v-for="data in [data]" transition="slidright"><span class="stat">{{main.temp}}</span>°C</div></dd>
          </dl>
        </div>
        <div class="humidite">
          <dl>
            <dt>
              <picto name='picto-humidity'></picto>
              <br>Taux d'humidité
            </dt>
            <dd>
            <div v-for="data in [data]" transition="full">
              <div class="progress secondary" role="progressbar" tabindex="0" aria-valuenow="{{main.humidity}}" aria-valuemin="0" aria-valuetext="{{main.humidity}} percent" aria-valuemax="100">
                <span class="progress-meter" v-bind:style="{ width: main.humidity + '%'}">
                  <p class="progress-meter-text">{{main.humidity}}%</p>
                </span>
              </div>
            </div>
            </dd>
          </dl>
        </div>
        <div class="i">
          <dl>
            <dt>
              <picto name='picto-wind'></picto>
              <br>Force du vent
            </dt>
            <dd><div v-for="data in [data]" transition="slidright"><span class="stat">{{wind.speed}}</span> mps</div></dd>
          </dl>
        </div>
      </div>
    </div>
    <map :coord.sync="LatLng"></map>
  </section>

</template>

<script>
import Map from './Map'
import Weather from './Weather'
import Picto from './Pictos'

export default {
  components: {
    Map,
    Weather,
    Picto
  },
  props: {
    city: String
  },
  data () {
    return {
      data: {},
      cityname: '',
      LatLng: {
        lat: 0,
        lng: 0
      },
      main: {
        temp: '',
        pressure: '',
        humidity: ''
      },
      weather: {
        id: 0,
        main: '',
        description: '',
        icon: ''
      },
      wind: {
        speed: '',
        deg: ''
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
        this.weather = this.data.weather[0]
        this.main = this.data.main
        this.cityname = this.data.name
        this.wind = this.data.wind
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
    min-height: 60px;
    overflow: hidden;
  }

  .wpicto {
    position: absolute;
    top: 0;
    right: 0;

  }

  dd {
    position: relative;
    min-height: 2rem;
    overflow: hidden
  }

</style>
