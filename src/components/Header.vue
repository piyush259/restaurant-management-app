<template>
    <div class="nav">
<router-link to="/">Home</router-link>
<router-link to="/addrestaurant">Add Restaurant</router-link>
<router-link to="/updaterestaurant">Update Restaurant</router-link>
<a v-on:click="logout" >Logout</a>
</div>
   </template>
<script>
export default {
    name: 'HeaderComponent',
    methods: {
        logout() {
            localStorage.clear('token');
            this.$router.push('/login');
        }
    } 
}
</script>

<style>
    .nav {
        display:flex;
        justify-content:left;
        background-color: #db005b;
        color: white;
        padding: 5px;
    }

    a {
        color: white;
        text-decoration: none;
        transition: color 0.3s ease, background-color 0.3s ease; /* Smooth transition effect */
        padding: 10px;
        padding-left: 20px;
    }

    a:hover {
        color: #063822;
        background-color: white;
    }
</style>
