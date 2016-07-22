<template>
		<span class="stat"><i class="owf owf-fw owf-{{code}}-d"></i></span>
</template>

<script>
import '../../bower_components/owfont/css/owfont-regular.css'
	export default {
  props: {
    code: Number
  }
	}
</script>

<style lang="scss" scoped>

@font-face {
  font-family: 'owfont';
  src: url('../assets/fonts/owf/owfont-regular.eot?v=1.0.0');
  src: url('../assets/fonts/owf/owfont-regular.eot?#iefix&v=1.0.0') format('embedded-opentype'),
	  url('../assets/fonts/owf/owfont-regular.woff') format('woff'),
	  url('../assets/fonts/owf/owfont-regular.ttf') format('truetype'),
	  url('../assets/fonts/owf/owfont-regular.svg#owf-regular') format('svg');
  font-weight: normal;
  font-style: normal;
}

</style>