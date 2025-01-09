<template>
    <HeaderComponent/>
    
    <h1 class="top">Hellow {{name}}, Welcome to Home Page</h1>
    <div class="container">
    <h1>Restaurants List</h1>
    <table class="styled-table">
        <thead>
            <tr>
                <th>Restaurant Name</th>
                <th>Address</th>
                <th>Rating</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="rest in restaurants" :key="rest.id">
                <td>{{rest.name}}</td>
                <td>{{rest.location}}</td>
                <td>{{rest.rating}}</td>
                <td class="actions">
                    <router-link :to="'/updaterestaurant/'+rest.id">Update    </router-link>
                    <a href="#" v-on:click="deleteRestaurant(rest.id)">    Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    name: 'HomePage',
    data() {
        return {
            name: '',
            restaurants: []
        };
    },
    components: {
        HeaderComponent: Header,
    },
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete(`http://localhost:3000/restaurant/${id}`);
            console.warn(result);
            if (result.status == 200) {
                this.$router.go();
            }
        }
    },
    async mounted() {
        let token = localStorage.getItem('token');
        this.name = JSON.parse(token).name;
        if (!token) {
            this.$router.push('/signup');
        }
        let result = await axios.get('http://localhost:3000/restaurant');
        this.restaurants = result.data;
    }
};
</script>

<style>
.top {
    color: #063822;
    text-decoration: underline;
    text-align: center;
    margin-top: 40px;
}
h1 {
    color: #063822;
    text-decoration: underline;
    text-align: center;
}
body {
    background-color: #f0f0f0;
    padding: 0px;
    margin: 0px;
}
.container {
    width: 90%;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.container h1 {
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
}

.styled-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 16px;
    text-align: left;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.styled-table thead tr {
    background-color: #4CAF50;
    color: #fff;
    text-align: center;
    font-weight: bold;
}

.styled-table th, 
.styled-table td {
    padding: 12px 15px;
    border: 1px solid #ddd;
}

.styled-table tbody tr {
    transition: background-color 0.3s ease;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:hover {
    background-color: #f1f1f1;
}

.styled-table tbody tr td {
    text-align: center;
}

.styled-table tbody tr td:last-child {
    font-weight: bold;
    color: #4CAF50;
}
.styled-table tbody tr:hover {
    background-color: #f1f1f1; /* Keep row highlight on hover */
}

.actions {
  
    justify-content: center;
    visibility: visible; /* Ensure actions are always visible */
}

.actions a {
    text-decoration: none;
    color: #4CAF50; /* Green color for links */
    font-weight: bold;
    transition: color 0.3s ease;
}

.actions a:hover {
    color: #db005b; /* Change color on hover for better interactivity */
}


</style>
