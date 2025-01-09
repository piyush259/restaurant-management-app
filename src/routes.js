import Home from './components/Home.vue';
import SignupForm from './components/SignupForm.vue';
import {createRouter,createWebHistory} from 'vue-router';
import login from './components/login.vue';
import AddRestaurant from './components/Addrestaurant.vue';
import UpdateRestaurant from './components/UpdateRestaurant.vue';

const routes = [
    {
        name: 'HomePage',
        component: Home,
        path: '/'
    }
    ,
    {
        name: 'signup',
        component: SignupForm,
        path: '/signup'
    },
    {
        name: 'login',
        component: login,
        path: '/login'
    },
    {
        name: 'AddRestaurant',
        component: AddRestaurant,
        path: '/addrestaurant'
    },
    {
        name: 'UpdateRestaurant',
        component: UpdateRestaurant,
        path: '/updaterestaurant/:id'
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;