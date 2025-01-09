<template>
<h1>Login Page</h1>
<img class="logo" alt="Vue logo" src="../assets/blogo.png">

<div class="login">
    <input type="email" v-model="email" placeholder="Email" /><br><br>
    <input type="password" v-model="password" placeholder="Password" /><br><br>
    <button v-on:click="login">Login</button>
    <router-link to="/signup">Create account?</router-link>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            console.warn("User logged in successfully");
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);

            if (result.data.length > 0 && result.status == 200) {
                localStorage.setItem('token', JSON.stringify(result.data[0]));
                this.$router.push('/');
            } else {
                alert('Invalid email or password');
            }
        },

       
    },
    mounted() {
            let token = localStorage.getItem('token');
            if (token) {
                this.$router.push('/');
            }
        }
};
</script>

<style>
.login {
    width: 300px;
    height: 80%;
    margin: 0 auto;
    border: 1px solid #ccc;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 30px;
    width: 30%;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    width: 100%;
    padding: 10px;
    margin: 1px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    
}

button {
    width: 48%;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #ff506d;
    color: white;
}
</style>
