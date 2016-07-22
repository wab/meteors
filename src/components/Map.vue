<template>
  <div class="map-wrapper">
    <div id="map"></div>
  </div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'
global.map

export default {
  components: {
  },
  props: {
    coord: Object
  },
  methods: {
    loadMap () {
      const LatLng = {
        lat: this.coord.lat,
        lng: this.coord.lon
      }
      console.log('map init with : ' + JSON.stringify(LatLng))
      GoogleMapsLoader.load(function (google) {
        /* eslint-disable no-new */
        global.map = new google.maps.Map(document.getElementById('map'), {
          center: LatLng,
          scrollwheel: false,
          zoom: 12
        })
      })
    },
    udpateMap () {
      const LatLng = {
        lat: this.coord.lat,
        lng: this.coord.lon
      }
      console.log('map upload with : ' + JSON.stringify(LatLng))
      GoogleMapsLoader.load(function (google) {
        global.map.setCenter(LatLng)
      })
    }
  },
  watch: {
    coord: function () {
      this.udpateMap()
    }
  },
  ready () {
    GoogleMapsLoader.KEY = 'AIzaSyCLb8bYvxTCYgV4EAgGD-atRN_fU_AwHvY'
    this.loadMap()
  }
}
</script>

<style lang="scss" scoped>
  .map-wrapper {
    position: relative;
    height: 200px;
  }
	#map {
		width: 100%;
		height: 200px;
	}
</style>