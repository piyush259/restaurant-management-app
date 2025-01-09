<template>
        <HeaderComponent/>
    
    <h1>Welcome to Home Page</h1>
</template>

<script>
import Header from './Header.vue';
export default {
    name: 'HomePage',
    components: {
        HeaderComponent: Header,
       
    },
    mounted() {
        let token = localStorage.getItem('token');
        if (!token) {
            this.$router.push('/signup');
        }
    }
};

</script>

<style>
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

</style>