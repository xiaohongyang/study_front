 
var GlobalConfig = {}
GlobalConfig.install = function(Vue, options) {

	const XHY_EVENT_BUS = new Vue({})
    window.XHY_EVENT_BUS = XHY_EVENT_BUS

	Vue.prototype.$config = { 
	}
	Vue.prototype.$modal = {
		isShow : true,
		header : {
			text : 'title',
			isShow : true	
		},
		body : {
			text : 'title',
			isShow : true	
		},
	}

	window.XHY_EVENT_BUS.MODAL = Vue.prototype.$modal 
}

module.exports = GlobalConfig