// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// import configRouter from './routes'
import Router from 'vue-router'
import Share from './components/Share.vue'

Vue.use(Router)


const Foo = { template: '<div>foo</div>' }

const routes =[
	{path:'/',component:App},
	{path:'/share',component:Share},
] ;

const router = new Router({
	routes
});
// /* eslint-disable no-new */
const app = new Vue({
 	router,
 	render: h => h(App)
}).$mount('#app')
