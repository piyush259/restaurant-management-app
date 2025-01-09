<template>
    <HeaderComponent/>
    <h1>Welcome to Update Restaurant Page</h1>
    <div class="container">
        <form @submit.prevent="updateRestaurant">
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
            <button type="submit" class="btn btn-primary">Update Restaurant</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';

export default {
    name: 'UpdateRestaurant',
    components: {
        HeaderComponent: Header
    },
    data() {
        return {
            restaurant: {
                name: '',
                location: '',
                rating: ''
            },
            restaurantId: null
        };
    },
    async mounted() {
        let token = localStorage.getItem('token');
        if (!token) {
            this.$router.push('/signup');
        }

        // Get restaurant ID from route params
        this.restaurantId = this.$route.params.id;

        // Fetch restaurant details for the given ID
        try {
            const response = await axios.get(`http://localhost:3000/restaurant/${this.restaurantId}`);
            this.restaurant = response.data;
        } catch (error) {
            console.error('Error fetching restaurant details:', error);
        }
    },
    methods: {
        async updateRestaurant() {
            try {
                const response = await axios.put(`http://localhost:3000/restaurant/${this.restaurantId}`, this.restaurant);
                if (response.status === 200) {
                    alert('Restaurant updated successfully!');
                    this.$router.push('/');
                }
            } catch (error) {
                console.error('Error updating restaurant:', error);
                alert('Failed to update restaurant.');
            }
        }
    }
};
</script>
