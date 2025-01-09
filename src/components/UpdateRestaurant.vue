<template>
    <HeaderComponent/>
    <h1>Welcome to Update Restaurant Page</h1>
</template>

<script>
import Header from './Header.vue';
export default {
    name: 'AddRestaurant',
    components: {
        HeaderComponent: Header
    },
    mounted() {
        let token = localStorage.getItem('token');
        if (!token) {
            this.$router.push('/signup');
        }
    }
}

</script>