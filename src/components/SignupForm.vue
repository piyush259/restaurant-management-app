<template>
    <h1>Sign Up</h1>
    <img class="logo" alt="Vue logo" src="../assets/blogo.png">

    <div class="register">
      <input type="text" v-model="name" placeholder="Name" /><br><br>
      <input type="email" v-model="email" placeholder="Email" /><br><br>
      <input type="password" v-model="password" placeholder="Password" /><br><br>
      <button v-on:click="signUp">Sign Up</button>
      <router-link to="/login">Already have an account?</router-link>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  export default {
    name: 'SignupForm', 
    data() {
      return {
        name: '',
        email: '',
        password: '',
      };
    },
    methods: {
     async signUp() {

        console.warn("User signed up successfully");
        let result= await axios.post('http://localhost:3000/users', {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        console.warn(result);
        if(result.status==201){
          localStorage.setItem('token', JSON.stringify(result.data));
          this.$router.push('/');
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
    .register {
      width: 300px;
      height: 80%;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    input {
      width: 80%;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
    button {
      width: 88%;
      padding: 10px;
      margin: 5px 0;
      border-radius: 5px;
      border: 1px solid #ccc;
      background-color: #ff506d;
      color: white;
    }
  </style>