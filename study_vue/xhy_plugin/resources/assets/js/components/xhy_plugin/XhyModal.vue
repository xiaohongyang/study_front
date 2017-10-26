<!-- template for the modal component -->
  

<template>
	    <div class="modal-mask"  v-if="showModal">
	      <div class="modal-wrapper" >
	        <div class="modal-container" >

	          <div class="modal-header">
	            <slot name="header">
	              default header
	            </slot>
	            <a href="#" @click="close()" class="btn small-close-btn btn-xs btn-success" style="">x</a>
	          </div>

	          <div class="modal-body">
	            <slot name="body">
	                
	            </slot>
            	{{modal.body.text}}
	          </div>

	          <div class="modal-footer">
	            <slot name="footer">
	              default footer
	              <button class="modal-default-button btn btn-xs btn-primary"  v-on:click="close(); $emit('close')">
	                OK
	              </button>
	            </slot>
	          </div>
	        </div>
	      </div>
	    </div>  
</template>

<script>
export default {
	props : {
		defaultIsShow : {
			default : true
		},
		defaultContent : String
	},
	data : function(){
		return {
			showModal : this.defaultIsShow, 
			
		}
	}, 
	methods : {
		close : function(){
			this.showModal = false
	    }
	},
	computed : {
		modal(){
			console.log('modal00000000', window.XHY_EVENT_BUS.MODAL)

			return window.XHY_EVENT_BUS.MODAL ? window.XHY_EVENT_BUS.MODAL : {body:{}}
		}
	}
}
</script> 
<style>
	.modal-mask {
	  position: fixed;
	  z-index: 9998;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  background-color: rgba(0, 0, 0, .5);
	  display: table;
	  transition: opacity .3s ease;
	}

	.modal-wrapper {
	  display: table-cell;
	  vertical-align: middle;
	}

	.modal-container {
	  width: 300px;
	  margin: 0px auto;
	  padding: 20px 30px;
	  background-color: #fff;
	  border-radius: 2px;
	  box-shadow: 0px 2px 8px rgba(0, 0, 0, .33);
	  transition: all .3s ease;
	  font-family: Helvetica, Arial, sans-serif;
	}

	.modal-header h3 {
	  margin-top: 0;
	  color: #42b983;
	  display: inline-block;
	}

	.modal-header .small-close-btn {
	  display: inline-block;
	  float: right;
	  top: 0;
	}

	.modal-body {
	  margin: 20px 0;
	}

	.modal-default-button {
	  float: right;
	}

	/*
	 * The following styles are auto-applied to elements with
	 * transition="modal" when their visibility is toggled
	 * by Vue.js.
	 *
	 * You can easily play with the modal transition by editing
	 * these styles.
	 */

	.modal-enter {
	  opacity: 0;
	}

	.modal-leave-active {
	  opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
	  -webkit-transform: scale(1.1);
	  transform: scale(1.1);
	}
</style>

