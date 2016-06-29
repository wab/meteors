<template>
	<p>la map :</p>
	<div id="map"></div>
</template>

<script>
export default {
  props: {
    location: Object
  },
  data () {
    return {
      map: ''
    }
  },
  ready () {
    // map = new googleMaps.Map(document.getElementById('map'), {
    //   center: {lat: -34.397, lng: 150.644},
    //   zoom: 8
    // })
  }
}
</script>

<style lang="scss" scoped>
	#map {
		width: 100%;
		height: 300px;
    background: #eee;
	}	
</style>