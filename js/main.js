// create a couple of component we can request and render
import landingComponent from "./modules/landingComponent.js";
import signUpComponent from "./modules/signUpComponent.js";
import ErrorComponent from "./modules/ErrorComponent.js";
// these are the same as Express routes -> router.get('/', ... do something with the request)
const routes = [
    { path: '/', name: 'landing', component: landingComponent },
    { path: '/signUp', name: 'signUp', component: signUpComponent },
    { path: '*', name: 'error', component: ErrorComponent }
]

const router = new VueRouter({
    routes // short for routes: routes
})

const vm = new Vue ({
    data: {

    },

    methods: {

    },

    router
}).$mount("#app");