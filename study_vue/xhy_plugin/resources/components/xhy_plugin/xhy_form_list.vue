<template>
	<li>{{content}}</li>
</template>
<script>
module.exports = {
	data : function() {
		return {
			content : 'hello world'
		}
	}
}
</script>
<style>
	li{
		list-style : none;
	}
</style>

