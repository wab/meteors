<template>
  <div v-if="loadingData">Chargement...</div>
  <section class="card" v-if="!loadingData">
    <div class="card-content" >
      <header class="card-header">
        <div v-for="data in [data]" transition="slidup">
          <h2><span v-text="data.name"></span> <weather :code="data.weather[0].id" class="wpicto"></weather></h2>
        </div>
      </header>
      <div class="weather">
        <div class="desc" v-text="data.weather[0].description"></div>
        <div class="temperature">
          <dl>
            <dt>
              <picto name='picto-thermometer'></picto>
              <br>Température
            </dt>
            <dd><div v-for="data in [data]" transition="slidright"><span class="stat" v-text="data.main.temp"></span>°C</div></dd>
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
              <div class="progress secondary" role="progressbar" tabindex="0" aria-valuenow="{{data.main.humidity}}" aria-valuemin="0" aria-valuetext="{{data.main.humidity}} percent" aria-valuemax="100">
                <span class="progress-meter" v-bind:style="{ width: data.main.humidity + '%'}">
                <p class="progress-meter-text"><span v-text="data.main.humidity"></span> %</p>
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
            <dd><div v-for="data in [data]" transition="slidright"><span class="stat" v-text="data.wind.speed"></span> mps</div></dd>
          </dl>
        </div>
      </div>
    </div>
    <map :coord.sync="data.coord"></map>
  </section>

</template>

<script>
import Map from './Map'
import Weather from './Weather'
import Picto from './Pictos'

let data = {}

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
      data,
      loadingData: true
    }
  },
  methods: {
    getData: function (city) {
      // Change la requête en fonction de la ville
      const query = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&units=metric&appid=801c6f79c0eaf3711dbda7eb7f2676c6`

      // Récupère les données
      const datasPromise = window.fetch(query)

      datasPromise
        // Lorsque les données sont récupérees les mettre en json
        .then(data => data.json())
        // Lorsque les données sont en json, les dispatcher dans this.data
        .then(data => {
          this.data = data
          this.loadingData = false
        })
        // Sinon afficher err
        .catch((err) => {
          console.error(err)
        })
    }
  },
  events: {
    // Au chargement
    'hook:created': function () {
      this.getData('Rennes')
    },
    // Mise à jour des données
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
