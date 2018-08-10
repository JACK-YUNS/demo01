<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
  export default{
    name: 'APP'
  }
</script>

<style lang="scss">
  @import './styles/index.scss';
  #app{
  	overflow-x: hidden;
    background: #f7f7f7;
  }
</style>
