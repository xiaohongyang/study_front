
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


const vue = new Vue({
    'el' : '#app'
})



Vue.component('xhy_form_list', require('../components/xhy_plugin/xhy_form_list.vue'))