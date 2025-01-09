<template>
    <div class="nav">
<img src="../assets/blogo.png" alt="logo" width="50" height="50">
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
        display: flex;
        align-items: center; /* Center vertically */
        justify-content: left;
        background-color: #db005b;
        color: white;
        padding: 10px 20px; /* Increase padding for better spacing */
    }

    .nav img {
        margin-right: 15px; /* Space between logo and links */
    }

    .nav a {
        font-size: 1.2rem; /* Increase font size */
        color: white;
        text-decoration: none;
        transition: color 0.3s ease, background-color 0.3s ease; /* Smooth transition effect */
        padding: 10px 15px; /* Add padding for better click area */
        margin: 0 5px; /* Space between links */
    }

    .nav a:hover {
        color: #063822;
        background-color: white;
        border-radius: 5px; /* Rounded corners for hover effect */
    }
</style>

