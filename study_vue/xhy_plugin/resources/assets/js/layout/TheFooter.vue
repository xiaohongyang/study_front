<template>
	<span @click="showModal()">alert</span>
</template>
<script>
	export default {

		methods : {
			showModal : function(){
				this.$config.modal.isShow = true
				alert(this.$config.modal.isShow)
		    }
		}

	}
</script>