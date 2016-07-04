<template>
		<i class="owf owf-fw owf-{{code}}-d"></i>
</template>

<script>
import '../../bower_components/owfont/css/owfont-regular.css'
	export default {
  props: {
    code: {
      type: Number,
      default: 0
    }
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

i {
	color: #333;
}

</style>