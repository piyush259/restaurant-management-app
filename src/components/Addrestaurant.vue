<template>
<HeaderComponent/>
    <h1>Welcome to Add Restaurant Page</h1>
    <div class="container">
        <form @submit.prevent="addRestaurant">
            <div class="form-group">
                <label for="name">Restaurant Name : </label>
                <input type="text" class="form-control" id="name" v-model="restaurant.name">
            </div>
            <div class="form-group">
                <label for="location">Location : </label>
                <input type="text" class="form-control" id="location" v-model="restaurant.location">
            </div>
            <div class="form-group">
                <label for="rating">Rating : </label>
                <input type="text" class="form-control" id="rating" v-model="restaurant.rating">
            </div>
            <button type="submit" class="btn btn-primary">Add Restaurant</button>
        </form>
    </div>
   </template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default {
    name: 'AddRestaurant',
    data() {
        return {
            restaurant:{
                name: '',
                location: '',
                rating: ''
            }
        };
    },
    components: {
        HeaderComponent: Header
    },
    methods: {
        async addRestaurant() {
            let result = await axios.post('http://localhost:3000/restaurant', {
                name: this.restaurant.name,
                location: this.restaurant.location,
                rating: this.restaurant.rating,
               
            });
            console.warn(result);
            if (result.status == 201) {
                this.$router.push('/');
            }
        }
    },
    mounted() {
        let token = localStorage.getItem('token');
        if (!token) {
            this.$router.push('/signup');
        }
    }
}
</script>

<style>
h1 {
    color: #063822;
    text-decoration: underline;
    text-align: center;
}
body {
    background-color: #f0f0f0;
}
.container {
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.form-group {
    margin: 10px 0;
    padding-right: 20px;
    padding: 2px;
    justify-content: end;
    justify-items: center;
}
.btn {
    padding: 10px 10px;
    background-color: #ff0080;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 0;
    width: 40%;
}
.btn:hover {
    background-color: #db005b;
}
input {
    width: 50%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    justify-content:end;
}
</style>